import { initialActivities } from './initialData.js';

export class TrainingStore {
  constructor() {
    this.activities = this._loadFromStorage();
  }

  _loadFromStorage() {
    // Using a new key 'tri-activities-v2' to force refresh with CSV data
    const data = localStorage.getItem('tri-activities-v2');
    const activities = data ? JSON.parse(data) : [];
    if (activities.length === 0) {
      return this._seedData();
    }
    return activities;
  }

  _seedData() {
    localStorage.setItem('tri-activities-v2', JSON.stringify(initialActivities));
    return initialActivities;
  }

  _saveToStorage() {
    localStorage.setItem('tri-activities-v2', JSON.stringify(this.activities));
  }

  addActivity(activity) {
    const newActivity = {
      id: Date.now(),
      date: new Date().toISOString(),
      ...activity
    };
    this.activities.unshift(newActivity);
    this._saveToStorage();
    return newActivity;
  }

  getActivities() {
    return this.activities;
  }

  getTotals() {
    return this.activities.reduce((acc, curr) => {
      const type = curr.type;
      acc[type].dist += parseFloat(curr.distance || 0);
      acc[type].time += parseFloat(curr.duration || 0);
      return acc;
    }, {
      swim: { dist: 0, time: 0 },
      bike: { dist: 0, time: 0 },
      run: { dist: 0, time: 0 }
    });
  }

  getWeeklyData() {
    const labels = [];
    const swimData = [];
    const bikeData = [];
    const runData = [];

    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      labels.push(d.toLocaleDateString('ko-KR', { weekday: 'short' }));

      const dayActivities = this.activities.filter(a => a.date.startsWith(dateStr));
      
      swimData.push(dayActivities.filter(a => a.type === 'swim').reduce((sum, a) => sum + parseFloat(a.duration), 0));
      bikeData.push(dayActivities.filter(a => a.type === 'bike').reduce((sum, a) => sum + parseFloat(a.duration), 0));
      runData.push(dayActivities.filter(a => a.type === 'run').reduce((sum, a) => sum + parseFloat(a.duration), 0));
    }

    return { labels, swimData, bikeData, runData };
  }
}

export const store = new TrainingStore();
