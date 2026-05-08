/**
 * Storage Service for Global Industry Daily Briefing
 * Manages daily logs and persistence.
 */
export const StorageService = {
    STORAGE_KEY: 'gidb_logs_v31',

    /**
     * Get all logs
     */
    getLogs() {
        const logs = localStorage.getItem(this.STORAGE_KEY);
        return logs ? JSON.parse(logs) : {};
    },

    /**
     * Get briefing for a specific date (YYYY-MM-DD)
     */
    getBriefingByDate(date) {
        const logs = this.getLogs();
        return logs[date] || null;
    },

    /**
     * Save briefing for a specific date
     */
    saveBriefing(date, briefingData) {
        const logs = this.getLogs();
        logs[date] = briefingData;
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(logs));
    },

    /**
     * Clear specific date or all logs (for force refresh)
     */
    clearLogs(date = null) {
        if (date) {
            const logs = this.getLogs();
            delete logs[date];
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(logs));
        } else {
            localStorage.removeItem(this.STORAGE_KEY);
        }
    },

    /**
     * Get list of dates with available logs
     */
    getAvailableDates() {
        return Object.keys(this.getLogs()).sort((a, b) => new Date(b) - new Date(a));
    }
};
