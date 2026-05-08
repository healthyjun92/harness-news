import { StorageService } from './services/storage.js?v=7.0';
import { NewsService } from './services/news.js?v=7.0';

console.log('Harness News App is loading...');

const TRANSLATIONS = {
    en: {
        logo: 'Harness News Global',
        main: 'Main',
        todaysBriefing: "Today's Briefing",
        archiveLogs: 'Archive Logs',
        subTitle: 'Original insights and in-depth reporting on global industry trends.',
        fetching: 'Loading latest articles...',
        recentIssue: 'Recent Issue',
        today: "Today's Briefing",
        archive: 'Archive',
        lastUpdated: 'Last updated',
        readArticle: 'Read Full Article',
        keyPoints: 'Key Points',
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
        back: 'Back to News',
        author: 'By',
        readTime: 'min read',
        aboutUsContent: 'Harness News is a premium publisher of original, in-depth articles focusing on global industry trends. Our dedicated team of analysts and writers provide accurate, concise, and professional insights for business leaders and researchers worldwide. We pride ourselves on creating high-quality, original content that adds significant value to the industry dialogue.',
        privacyContent: 'We value your privacy. Harness News does not collect personal data unnecessarily. We use standard web analytics and advertising partners (like Google AdSense) which use cookies to serve personalized ads based on your visit to our site and other sites on the internet. We ensure a safe and transparent browsing experience.',
        termsContent: 'By accessing Harness News, you agree to our terms. All content published here is original and protected by copyright. You may read and share our articles for informational purposes. Harness News provides valuable, carefully researched journalism to our readers.',
        close: 'Close'
    },
    ko: {
        logo: '하네스 뉴스 글로벌',
        main: '메인',
        todaysBriefing: '오늘의 브리핑',
        archiveLogs: '과거 로그',
        subTitle: '글로벌 산업 동향에 대한 독창적인 통찰과 심층 보도',
        fetching: '최신 기사를 불러오는 중...',
        recentIssue: '주요 이슈',
        today: '오늘의 브리핑',
        archive: '아카이브',
        lastUpdated: '최종 수정',
        readArticle: '기사 전문 읽기',
        keyPoints: '주요 요점',
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
        back: '목록으로 돌아가기',
        author: '작성자',
        readTime: '분 소요',
        aboutUsContent: '하네스 뉴스는 글로벌 산업 동향에 초점을 맞춘 독창적이고 심층적인 기사를 발행하는 프리미엄 퍼블리셔입니다. 전문 분석가와 작가들로 구성된 팀은 전 세계 비즈니스 리더들에게 가치 있는 통찰력을 제공합니다. 우리는 업계 논의에 실질적인 가치를 더하는 고품질의 오리지널 콘텐츠 제작을 자랑스럽게 생각합니다.',
        privacyContent: '당사는 귀하의 개인정보를 소중히 여깁니다. 하네스 뉴스는 불필요한 개인 데이터를 수집하지 않습니다. 당사는 구글 애드센스와 같은 광고 파트너와 표준 웹 분석 도구를 사용하며, 이러한 파트너는 쿠키를 사용하여 귀하의 웹사이트 방문 기록을 기반으로 맞춤형 광고를 제공할 수 있습니다.',
        termsContent: '하네스 뉴스를 이용함으로써 귀하는 당사의 약관에 동의하게 됩니다. 이곳에 게재된 모든 콘텐츠는 독창적이며 저작권의 보호를 받습니다. 귀하는 정보 제공 목적으로 당사의 기사를 읽고 공유할 수 있습니다. 하네스 뉴스는 독자들에게 세심하게 연구된 가치 있는 저널리즘을 제공합니다.',
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
        this.currentArticle = null;
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

    setView(view, param = null) {
        this.currentView = view;
        this.sidebarActive = false;
        
        if (view === 'archive' && param) {
            this.selectedDate = param;
            this.briefingData = StorageService.getBriefingByDate(param);
        } else if (view === 'today') {
            this.selectedDate = new Date().toISOString().split('T')[0];
            this.briefingData = StorageService.getBriefingByDate(this.selectedDate);
        } else if (view === 'article') {
            this.currentArticle = param;
        } else if (view === 'page') {
            this.currentPage = param;
        }
        
        window.scrollTo(0, 0);
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

        this.innerHTML = `
            <div class="app-container">
                <aside class="${this.sidebarActive ? 'active' : ''}">
                    <div class="logo" style="cursor:pointer;" id="logo-home">
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
                                <h1>${this.getHeaderTitle(t)}</h1>
                                <p>${t.subTitle}</p>
                            </div>
                        </div>
                        <div class="top-controls">
                            <div style="display: flex; gap: 0.75rem;">
                                ${this.currentView !== 'article' && this.currentView !== 'page' ? `
                                <button class="refresh-btn" id="refresh-btn" title="${t.refreshTip}">
                                    <i data-lucide="refresh-cw"></i> ${t.refresh}
                                </button>
                                ` : `
                                <button class="refresh-btn" id="back-btn">
                                    <i data-lucide="arrow-left"></i> ${t.back}
                                </button>
                                `}
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

                    ${this.renderMainContent(t)}
                </main>
            </div>
        `;

        this.attachEventListeners();
        if (window.lucide) lucide.createIcons();
    }

    getHeaderTitle(t) {
        if (this.currentView === 'today') return t.today;
        if (this.currentView === 'archive') return `${t.archive}: ${this.selectedDate}`;
        if (this.currentView === 'article') return t.logo;
        if (this.currentView === 'page') return t.logo;
        return t.logo;
    }

    renderMainContent(t) {
        if (this.isLoading) {
            return `
                <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 300px; color: var(--text-muted); gap: 1.5rem;">
                    <span class="loader"></span>
                    <p>${t.fetching}</p>
                </div>
            `;
        }

        if (this.currentView === 'article' && this.currentArticle) {
            return this.renderArticleView(t);
        }

        if (this.currentView === 'page' && this.currentPage) {
            return this.renderPageView(t);
        }

        return this.renderBriefingGrid(t);
    }

    renderBriefingGrid(t) {
        const industries = NewsService.getIndustries();
        let html = '<div class="briefing-grid">';
        
        if (this.briefingData) {
            industries.forEach((ind, index) => {
                const newsItems = this.briefingData[ind.id] || [];
                if (newsItems.length > 0) {
                    html += this.renderIndustrySection(ind, newsItems, t);
                    if (index < industries.length - 1) {
                        html += `
                            <div class="adsense-slot-container">
                                <!-- AdSense Placeholder -->
                                <ins class="adsbygoogle"
                                     style="display:block"
                                     data-ad-client="ca-pub-3693048614072911"
                                     data-ad-slot="1234567890"
                                     data-ad-format="auto"
                                     data-full-width-responsive="true"></ins>
                                <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                            </div>
                        `;
                    }
                }
            });
        }
        html += '</div>';
        return html;
    }

    renderIndustrySection(industry, newsItems, t) {
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
                        
                        return `
                            <article class="news-card article-link" data-id="${item.id}" data-industry="${industry.id}">
                                <div class="news-card-header">
                                    <h3>${title}</h3>
                                </div>
                                <p class="news-summary">${summary}</p>
                                
                                <div class="news-meta">
                                    <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%;">
                                        <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
                                            <span class="read-more-link highlight">
                                                ${t.readArticle} <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>
                                            </span>
                                        </div>
                                        <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; color: var(--text-muted);">
                                            <span class="issue-badge">${t.author}: ${item.author || 'Harness News'}</span>
                                            <span class="update-date" style="margin-left: auto;">${item.readTime || 3} ${t.readTime} • ${item.date || this.selectedDate}</span>
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

    renderArticleView(t) {
        const item = this.currentArticle;
        const title = typeof item.title === 'object' ? item.title[this.lang] || item.title['en'] : item.title;
        const contentRaw = typeof item.content === 'object' ? item.content[this.lang] || item.content['en'] : item.content;
        
        // Split content by paragraphs
        const paragraphs = contentRaw.split('\\n').filter(p => p.trim() !== '');

        let contentHtml = '';
        paragraphs.forEach((p, idx) => {
            contentHtml += `<p class="article-paragraph">${p.trim()}</p>`;
            // Insert ad after 2nd paragraph
            if (idx === 1 && paragraphs.length > 2) {
                contentHtml += `
                    <div class="article-ad-slot">
                         <ins class="adsbygoogle"
                             style="display:block; text-align:center;"
                             data-ad-layout="in-article"
                             data-ad-format="fluid"
                             data-ad-client="ca-pub-3693048614072911"
                             data-ad-slot="0987654321"></ins>
                        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                    </div>
                `;
            }
        });

        return `
            <article class="full-article">
                <header class="article-header">
                    <h1>${title}</h1>
                    <div class="article-meta">
                        <span class="article-author"><i data-lucide="user"></i> ${item.author || 'Harness News Team'}</span>
                        <span class="article-date"><i data-lucide="calendar"></i> ${item.date}</span>
                        <span class="article-read-time"><i data-lucide="clock"></i> ${item.readTime} ${t.readTime}</span>
                    </div>
                </header>
                
                <div class="article-content">
                    ${contentHtml}
                </div>

                <div class="article-footer-ad">
                    <ins class="adsbygoogle"
                         style="display:block"
                         data-ad-client="ca-pub-3693048614072911"
                         data-ad-slot="1122334455"
                         data-ad-format="autorelaxed"
                         data-full-width-responsive="true"></ins>
                    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                </div>
            </article>
        `;
    }

    renderPageView(t) {
        let title = '';
        let content = '';
        if (this.currentPage === 'about') { title = t.aboutUs; content = t.aboutUsContent; }
        if (this.currentPage === 'privacy') { title = t.privacyPolicy; content = t.privacyContent; }
        if (this.currentPage === 'terms') { title = t.termsOfService; content = t.termsContent; }

        return `
            <div class="static-page">
                <h1>${title}</h1>
                <div class="static-content">
                    <p>${content}</p>
                </div>
            </div>
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
        const logoHome = this.querySelector('#logo-home');
        if (logoHome) {
            logoHome.addEventListener('click', () => this.setView('today'));
        }

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

        const backBtn = this.querySelector('#back-btn');
        if (backBtn) {
            backBtn.addEventListener('click', () => this.setView('today'));
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

        this.querySelectorAll('.article-link').forEach(card => {
            card.addEventListener('click', () => {
                const id = card.getAttribute('data-id');
                const industryId = card.getAttribute('data-industry');
                const item = this.briefingData[industryId].find(i => i.id === id);
                if (item) {
                    this.setView('article', item);
                }
            });
        });

        const linkAbout = this.querySelector('#link-about');
        if (linkAbout) linkAbout.addEventListener('click', (e) => { e.preventDefault(); this.setView('page', 'about'); });
        
        const linkPrivacy = this.querySelector('#link-privacy');
        if (linkPrivacy) linkPrivacy.addEventListener('click', (e) => { e.preventDefault(); this.setView('page', 'privacy'); });
        
        const linkTerms = this.querySelector('#link-terms');
        if (linkTerms) linkTerms.addEventListener('click', (e) => { e.preventDefault(); this.setView('page', 'terms'); });
    }
}

customElements.define('industry-app', IndustryApp);
