import { StorageService } from './services/storage.js';
import { NewsService } from './services/news.js';

class IndustryApp extends HTMLElement {
    constructor() {
        super();
        this.currentView = 'today'; // 'today' or 'archive'
        this.selectedDate = new Date().toISOString().split('T')[0];
        this.briefingData = null;
        this.isLoading = false;
    }

    async connectedCallback() {
        await this.init();
        this.render();
    }

    async init() {
        const today = new Date().toISOString().split('T')[0];
        const existingBriefing = StorageService.getBriefingByDate(today);

        if (!existingBriefing) {
            this.isLoading = true;
            this.render();
            const newBriefing = await NewsService.fetchLatestBriefing();
            StorageService.saveBriefing(today, newBriefing);
            this.briefingData = newBriefing;
            this.isLoading = false;
        } else {
            this.briefingData = existingBriefing;
        }
    }

    setView(view, date = null) {
        this.currentView = view;
        if (date) {
            this.selectedDate = date;
            this.briefingData = StorageService.getBriefingByDate(date);
        } else {
            this.selectedDate = new Date().toISOString().split('T')[0];
            this.briefingData = StorageService.getBriefingByDate(this.selectedDate);
        }
        this.render();
    }

    render() {
        const availableDates = StorageService.getAvailableDates();
        const industries = NewsService.getIndustries();

        this.innerHTML = `
            <div class="app-container">
                <aside>
                    <div class="logo">
                        <i data-lucide="globe"></i>
                        <span>GIDB Global</span>
                    </div>
                    
                    <nav class="nav-section">
                        <h3>Main</h3>
                        <div class="nav-list">
                            <div class="nav-item ${this.currentView === 'today' ? 'active' : ''}" id="nav-today">
                                <i data-lucide="layout-dashboard"></i> Today's Briefing
                            </div>
                        </div>
                    </nav>

                    <nav class="nav-section">
                        <h3>Archive Logs</h3>
                        <div class="nav-list" id="archive-list">
                            ${availableDates.map(date => `
                                <div class="nav-item ${this.selectedDate === date && this.currentView === 'archive' ? 'active' : ''}" data-date="${date}">
                                    <i data-lucide="calendar"></i> ${date}
                                </div>
                            `).join('')}
                        </div>
                    </nav>
                </aside>

                <main>
                    <header>
                        <div class="header-title">
                            <h1>${this.currentView === 'today' ? "Today's Briefing" : `Archive: ${this.selectedDate}`}</h1>
                            <p>Global industry trends and major issues report.</p>
                        </div>
                        <div class="date-display">
                            <div class="today">${new Date(this.selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                        </div>
                    </header>

                    ${this.isLoading ? `
                        <div style="display: flex; justify-content: center; align-items: center; height: 300px; color: var(--text-muted);">
                            <p>Fetching latest industry data...</p>
                        </div>
                    ` : `
                        <div class="briefing-grid">
                            ${industries.map(ind => this.renderIndustrySection(ind)).join('')}
                        </div>
                    `}
                </main>
            </div>
        `;

        this.attachEventListeners();
        if (window.lucide) lucide.createIcons();
    }

    renderIndustrySection(industry) {
        const newsItems = this.briefingData ? this.briefingData[industry.id] : [];
        if (!newsItems || newsItems.length === 0) return '';

        return `
            <section class="industry-section ${industry.id}">
                <div class="industry-header">
                    <i data-lucide="${industry.icon}" style="color: var(--accent-${this.getAccentColor(industry.id)})"></i>
                    <h2>${industry.name}</h2>
                </div>
                <div class="news-cards">
                    ${newsItems.map(item => `
                        <div class="news-card">
                            <h4>${item.title}</h4>
                            <p>${item.summary}</p>
                            <div class="news-meta">
                                <span class="badge">${item.source}</span>
                                <span>Recent Issue</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }

    getAccentColor(id) {
        const colors = {
            robotics: 'blue',
            automotive: 'orange',
            battery: 'green',
            wiring: 'purple',
            automation: 'yellow'
        };
        return colors[id] || 'blue';
    }

    attachEventListeners() {
        this.querySelector('#nav-today').addEventListener('click', () => this.setView('today'));
        
        this.querySelectorAll('#archive-list .nav-item').forEach(item => {
            item.addEventListener('click', () => {
                const date = item.getAttribute('data-date');
                this.setView('archive', date);
            });
        });
    }
}

customElements.define('industry-app', IndustryApp);
