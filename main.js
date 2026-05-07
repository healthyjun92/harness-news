import { StorageService } from './services/storage.js?v=7.0';
import { NewsService } from './services/news.js?v=7.0';

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
        searchTip: 'If the link above is restricted, use this to search manually',
        keyPoints: 'Key Points',
        verified: 'Verified Official',
        officialNewsroom: 'Official Newsroom',
        contactUs: 'Partnership Inquiry',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Inquiry',
        refresh: 'Refresh',
        refreshTip: 'Force update with the latest industry data',
        aboutUs: 'About Us',
        privacyPolicy: 'Privacy Policy',
        termsOfService: 'Terms of Service',
        aboutUsContent: 'Harness News is a global intelligence platform dedicated to aggregating and verifying major industry trends. Our mission is to provide accurate, concise, and professional insights for business leaders and researchers worldwide.',
        privacyContent: 'We value your privacy. Harness News does not collect personal data unnecessarily. We use standard web analytics and advertising partners (like Google AdSense) which may use cookies to serve personalized ads based on your visit to our site and other sites on the internet.',
        termsContent: 'By accessing Harness News, you agree to use our content for informational purposes only. We strive for accuracy but do not guarantee the completeness of the curated news. The official source links are provided for your convenience.',
        close: 'Close'
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
        searchTip: '링크 접속이 원활하지 않을 경우 구글 검색 결과로 이동합니다',
        keyPoints: '주요 요점',
        verified: '공식 인증 원문',
        officialNewsroom: '공식 뉴스룸',
        contactUs: '제휴 문의',
        name: '이름',
        email: '이메일',
        message: '문의 내용',
        send: '문의 보내기',
        refresh: '새로고침',
        refreshTip: '최신 데이터를 강제로 다시 불러옵니다',
        aboutUs: '회사 소개',
        privacyPolicy: '개인정보처리방침',
        termsOfService: '이용약관',
        aboutUsContent: '하네스 뉴스는 주요 산업 동향을 수집하고 검증하는 글로벌 인텔리전스 플랫폼입니다. 전 세계 비즈니스 리더와 연구원들에게 정확하고 간결하며 전문적인 통찰력을 제공하는 것을 사명으로 합니다.',
        privacyContent: '당사는 귀하의 개인정보를 소중히 여깁니다. 하네스 뉴스는 불필요한 개인 데이터를 수집하지 않습니다. 당사는 구글 애드센스와 같은 광고 파트너와 표준 웹 분석 도구를 사용하며, 이러한 파트너는 쿠키를 사용하여 귀하의 웹사이트 방문 기록을 기반으로 맞춤형 광고를 제공할 수 있습니다.',
        termsContent: '하네스 뉴스를 이용함으로써 귀하는 정보 제공 목적으로만 당사의 콘텐츠를 이용하는 데 동의하게 됩니다. 당사는 정보의 정확성을 위해 노력하지만 수집된 뉴스의 완전성을 보장하지는 않습니다. 공식 원문 링크는 사용자의 편의를 위해 제공됩니다.',
        close: '닫기'
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
        
        const modal = this.querySelector('#info-modal');
        if (modal && e.target === modal) {
            modal.style.display = 'none';
        }
    }

    async init() {
        const today = new Date().toISOString().split('T')[0];
        const existingBriefing = StorageService.getBriefingByDate(today);

        if (!existingBriefing) {
            await this.refreshData(today);
        } else {
            this.briefingData = existingBriefing;
        }
    }

    async refreshData(date) {
        this.isLoading = true;
        this.render();
        const newBriefing = await NewsService.fetchLatestBriefing();
        StorageService.saveBriefing(date, newBriefing);
        this.briefingData = newBriefing;
        this.isLoading = false;
        this.render();
    }

    async handleManualRefresh() {
        const today = new Date().toISOString().split('T')[0];
        StorageService.clearLogs(today);
        await this.refreshData(today);
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

    openModal(title, content) {
        const modal = this.querySelector('#info-modal');
        const modalTitle = this.querySelector('#modal-title');
        const modalBody = this.querySelector('#modal-body');
        
        if (modal && modalTitle && modalBody) {
            modalTitle.textContent = title;
            modalBody.textContent = content;
            modal.style.display = 'flex';
        }
    }

    render() {
        const t = TRANSLATIONS[this.lang];
        const availableDates = StorageService.getAvailableDates();
        const industries = NewsService.getIndustries();

        // Render industry sections and intersperse AdSense placeholder slots
        let industrySectionsHTML = '';
        if (this.briefingData) {
            industries.forEach((ind, index) => {
                const sectionHtml = this.renderIndustrySection(ind, t);
                if (sectionHtml) {
                    industrySectionsHTML += sectionHtml;
                    // Add an AdSense slot between sections (except after the last one)
                    if (index < industries.length - 1) {
                        industrySectionsHTML += `
                            <div class="adsense-slot-container">
                                <!-- AdSense Placeholder -->
                                <div class="adsense-placeholder">Advertisement</div>
                            </div>
                        `;
                    }
                }
            });
        }

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

                    <nav class="nav-section" style="flex-grow: 1; overflow-y: auto;">
                        <h3>${t.archiveLogs}</h3>
                        <div class="nav-list" id="archive-list">
                            ${availableDates.map(date => `
                                <div class="nav-item ${this.selectedDate === date && this.currentView === 'archive' ? 'active' : ''}" data-date="${date}">
                                    <i data-lucide="calendar"></i> ${date}
                                </div>
                            `).join('')}
                        </div>
                    </nav>

                    <div class="contact-section">
                        <h3>${t.contactUs}</h3>
                        <form class="contact-form" action="https://formspree.io/f/mwvnpzna" method="POST">
                            <input type="text" name="name" placeholder="${t.name}" required>
                            <input type="email" name="email" placeholder="${t.email}" required>
                            <textarea name="message" placeholder="${t.message}" required></textarea>
                            <button type="submit"><i data-lucide="send" style="width: 14px; height: 14px; margin-right: 4px; vertical-align: text-bottom;"></i> ${t.send}</button>
                        </form>
                    </div>

                    <div class="legal-links">
                        <a href="#" class="legal-link" id="link-about">${t.aboutUs}</a>
                        <a href="#" class="legal-link" id="link-privacy">${t.privacyPolicy}</a>
                        <a href="#" class="legal-link" id="link-terms">${t.termsOfService}</a>
                    </div>
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
                            <div style="display: flex; gap: 0.75rem;">
                                <button class="refresh-btn" id="refresh-btn" title="${t.refreshTip}">
                                    <i data-lucide="refresh-cw"></i> ${t.refresh}
                                </button>
                                <div class="lang-toggle">
                                    <button class="lang-btn ${this.lang === 'ko' ? 'active' : ''}" data-lang="ko">KO</button>
                                    <button class="lang-btn ${this.lang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
                                </div>
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
                            ${industrySectionsHTML}
                        </div>
                    `}
                </main>
            </div>

            <!-- Info Modal -->
            <div class="modal-overlay" id="info-modal" style="display: none;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 id="modal-title"></h2>
                        <button class="close-modal" id="modal-close" title="${t.close}"><i data-lucide="x"></i></button>
                    </div>
                    <div class="modal-body" id="modal-body"></div>
                </div>
            </div>
        `;

        this.attachEventListeners();
        if (window.lucide) lucide.createIcons();
    }

    renderIndustrySection(industry, t) {
        const newsItems = this.briefingData ? this.briefingData[industry.id] : [];
        if (!newsItems || newsItems.length === 0) return '';

        const verifiedItems = newsItems.filter(item => 
            item.url && 
            item.url !== 'undefined' && 
            item.url !== '' && 
            item.url.startsWith('http')
        );

        if (verifiedItems.length === 0) return '';

        return `
            <section class="industry-section ${industry.id}">
                <div class="industry-header">
                    <i data-lucide="${industry.icon}" style="color: var(--accent-${this.getAccentColor(industry.id)})"></i>
                    <h2>${industry.name[this.lang] || industry.name['en'] || industry.name}</h2>
                </div>
                <div class="news-cards">
                    ${verifiedItems.map(item => {
                        const title = typeof item.title === 'object' ? item.title[this.lang] || item.title['en'] : item.title;
                        const summary = typeof item.summary === 'object' ? item.summary[this.lang] || item.summary['en'] : item.summary;
                        const mainPoints = item.mainPoints ? (item.mainPoints[this.lang] || item.mainPoints['en'] || []) : [];
                        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(title + ' ' + item.source)}`;
                        
                        return `
                            <article class="news-card">
                                <div class="news-card-header">
                                    <a href="${item.url}" target="_blank" class="news-title-link"><h3>${title}</h3></a>
                                    ${item.isVerified ? `<span class="verified-badge"><i data-lucide="check-circle"></i> ${t.verified}</span>` : ''}
                                </div>
                                <p class="news-summary">${summary}</p>
                                
                                ${mainPoints.length > 0 ? `
                                    <div class="key-points-container">
                                        <h4>${t.keyPoints}</h4>
                                        <ul class="key-points-list">
                                            ${mainPoints.map(point => `<li>${point}</li>`).join('')}
                                        </ul>
                                    </div>
                                ` : ''}

                                <div class="news-meta">
                                    <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%;">
                                        <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
                                            <span class="badge">${item.source}</span>
                                            <a href="${item.url}" target="_blank" class="read-more-link direct-article-link highlight" title="${t.directLinkTip}">
                                                <i data-lucide="external-link" style="width: 14px; height: 14px;"></i> ${t.readArticle}
                                            </a>
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
                            </article>
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

        const refreshBtn = this.querySelector('#refresh-btn');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => this.handleManualRefresh());
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

        const t = TRANSLATIONS[this.lang];
        const linkAbout = this.querySelector('#link-about');
        if (linkAbout) linkAbout.addEventListener('click', (e) => { e.preventDefault(); this.openModal(t.aboutUs, t.aboutUsContent); });
        
        const linkPrivacy = this.querySelector('#link-privacy');
        if (linkPrivacy) linkPrivacy.addEventListener('click', (e) => { e.preventDefault(); this.openModal(t.privacyPolicy, t.privacyContent); });
        
        const linkTerms = this.querySelector('#link-terms');
        if (linkTerms) linkTerms.addEventListener('click', (e) => { e.preventDefault(); this.openModal(t.termsOfService, t.termsContent); });

        const modalClose = this.querySelector('#modal-close');
        if (modalClose) {
            modalClose.addEventListener('click', () => {
                const modal = this.querySelector('#info-modal');
                if (modal) modal.style.display = 'none';
            });
        }
    }
}

customElements.define('industry-app', IndustryApp);
