import { StorageService } from './services/storage.js';
import { NewsService } from './services/news.js';

console.log('Harness News App is loading...');

const TRANSLATIONS = {
    en: {
        logo: 'Harness News Global',
        main: 'Main',
        todaysBriefing: "Today's Briefing",
        archiveLogs: 'Archive Logs',
        subTitle: 'Global industry trends and major issues report.',
        fetching: 'Fetching latest industry data...',
        recentIssue: 'Recent Issue',
        today: "Today's Briefing",
        archive: 'Archive',
        lastUpdated: 'Last updated',
        readArticle: 'View Official Source',
        directLinkTip: 'Go to the primary press release or newsroom',
        searchFallback: 'Search on Google',
        searchTip: 'If the link above is restricted, use this to search manually'
    },
    ko: {
        logo: '하네스 뉴스 글로벌',
        main: '메인',
        todaysBriefing: '오늘의 브리핑',
        archiveLogs: '과거 로그',
        subTitle: '글로벌 산업 동향 및 주요 이슈 보고서',
        fetching: '최신 산업 데이터를 불러오는 중...',
        recentIssue: '주요 이슈',
        today: '오늘의 브리핑',
        archive: '아카이브',
        lastUpdated: '최종 수정',
        readArticle: '공식 원문 보기',
        directLinkTip: '기업 공식 뉴스룸이나 대형 언론사 원문으로 이동합니다',
        searchFallback: '구글에서 직접 검색',
        searchTip: '링크 접속이 원활하지 않을 경우 구글 검색 결과로 이동합니다'
    }
};

class IndustryApp extends HTMLElement {
    constructor() {
        super();
        this.currentView = 'today';
        this.selectedDate = new Date().toISOString().split('T')[0];
        this.briefingData = null;
        this.isLoading = false;
        this.lang = localStorage.getItem('gidb_lang') || 'ko';
        this.sidebarActive = false;
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    async connectedCallback() {
        await this.init();
        this.render();
        document.addEventListener('click', this.handleOutsideClick);
    }

    disconnectedCallback() {
        document.removeEventListener('click', this.handleOutsideClick);
    }

    handleOutsideClick(e) {
        if (this.sidebarActive) {
            const aside = this.querySelector('aside');
            const menuToggle = this.querySelector('#menu-toggle');
            if (aside && !aside.contains(e.target) && menuToggle && !menuToggle.contains(e.target)) {
                this.sidebarActive = false;
                aside.classList.remove('active');
            }
        }
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

    setLanguage(lang) {
        this.lang = lang;
        localStorage.setItem('gidb_lang', lang);
        this.render();
    }

    setView(view, date = null) {
        this.currentView = view;
        this.sidebarActive = false;
        if (date) {
            this.selectedDate = date;
            this.briefingData = StorageService.getBriefingByDate(date);
        } else {
            this.selectedDate = new Date().toISOString().split('T')[0];
            this.briefingData = StorageService.getBriefingByDate(this.selectedDate);
        }
        this.render();
    }

    toggleSidebar() {
        this.sidebarActive = !this.sidebarActive;
        const aside = this.querySelector('aside');
        if (aside) {
            aside.classList.toggle('active', this.sidebarActive);
        }
    }

    render() {
        const t = TRANSLATIONS[this.lang];
        const availableDates = StorageService.getAvailableDates();
        const industries = NewsService.getIndustries();

        this.innerHTML = `
            <div class="app-container">
                <aside class="${this.sidebarActive ? 'active' : ''}">
                    <div class="logo">
                        <i data-lucide="globe"></i>
                        <span>${t.logo}</span>
                    </div>
                    
                    <nav class="nav-section">
                        <h3>${t.main}</h3>
                        <div class="nav-list">
                            <div class="nav-item ${this.currentView === 'today' ? 'active' : ''}" id="nav-today">
                                <i data-lucide="layout-dashboard"></i> ${t.todaysBriefing}
                            </div>
                        </div>
                    </nav>

                    <nav class="nav-section">
                        <h3>${t.archiveLogs}</h3>
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
                        <div style="display: flex; align-items: flex-start; gap: 1rem;">
                            <button class="menu-toggle" id="menu-toggle">
                                <i data-lucide="menu"></i>
                            </button>
                            <div class="header-title">
                                <h1>${this.currentView === 'today' ? t.today : `${t.archive}: ${this.selectedDate}`}</h1>
                                <p>${t.subTitle}</p>
                            </div>
                        </div>
                        <div class="top-controls">
                            <div class="lang-toggle">
                                <button class="lang-btn ${this.lang === 'ko' ? 'active' : ''}" data-lang="ko">KO</button>
                                <button class="lang-btn ${this.lang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
                            </div>
                            <div class="date-display">
                                <div class="today">${new Date(this.selectedDate).toLocaleDateString(this.lang === 'ko' ? 'ko-KR' : 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                            </div>
                        </div>
                    </header>

                    ${this.isLoading ? `
                        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 300px; color: var(--text-muted); gap: 1.5rem;">
                            <span class="loader"></span>
                            <p>${t.fetching}</p>
                        </div>
                    ` : `
                        <div class="briefing-grid">
                            ${industries.map(ind => this.renderIndustrySection(ind, t)).join('')}
                        </div>
                    `}
                </main>
            </div>
        `;

        this.attachEventListeners();
        if (window.lucide) lucide.createIcons();
    }

    renderIndustrySection(industry, t) {
        const newsItems = this.briefingData ? this.briefingData[industry.id] : [];
        if (!newsItems || newsItems.length === 0) return '';

        return `
            <section class="industry-section ${industry.id}">
                <div class="industry-header">
                    <i data-lucide="${industry.icon}" style="color: var(--accent-${this.getAccentColor(industry.id)})"></i>
                    <h2>${industry.name[this.lang] || industry.name['en'] || industry.name}</h2>
                </div>
                <div class="news-cards">
                    ${newsItems.map(item => {
                        const title = typeof item.title === 'object' ? item.title[this.lang] || item.title['en'] : item.title;
                        const summary = typeof item.summary === 'object' ? item.summary[this.lang] || item.summary['en'] : item.summary;
                        const hasUrl = item.url && item.url !== 'undefined';
                        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(title + ' ' + item.source)}`;
                        
                        return `
                            <div class="news-card">
                                ${hasUrl ? 
                                    `<a href="${item.url}" target="_blank" class="news-title-link"><h4>${title}</h4></a>` : 
                                    `<h4>${title}</h4>`
                                }
                                <p>${summary}</p>
                                <div class="news-meta">
                                    <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%;">
                                        <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
                                            <span class="badge">${item.source}</span>
                                            ${hasUrl ? 
                                                `<a href="${item.url}" target="_blank" class="read-more-link direct-article-link highlight" title="${t.directLinkTip}">
                                                    <i data-lucide="external-link" style="width: 14px; height: 14px;"></i> ${t.readArticle}
                                                </a>` : 
                                                ''
                                            }
                                            <a href="${searchUrl}" target="_blank" class="read-more-link search-fallback-link" title="${t.searchTip}" style="opacity: 0.8;">
                                                <i data-lucide="search" style="width: 14px; height: 14px;"></i> ${t.searchFallback}
                                            </a>
                                        </div>
                                        <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; color: var(--text-muted);">
                                            <span class="issue-badge">${t.recentIssue}</span>
                                            <span class="update-date" style="margin-left: auto;">${item.date || this.selectedDate}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
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
        const navToday = this.querySelector('#nav-today');
        if (navToday) {
            navToday.addEventListener('click', () => this.setView('today'));
        }
        
        const menuToggle = this.querySelector('#menu-toggle');
        if (menuToggle) {
            menuToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleSidebar();
            });
        }
        
        this.querySelectorAll('#archive-list .nav-item').forEach(item => {
            item.addEventListener('click', () => {
                const date = item.getAttribute('data-date');
                this.setView('archive', date);
            });
        });

        this.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.setLanguage(btn.getAttribute('data-lang'));
            });
        });
    }
}

customElements.define('industry-app', IndustryApp);
