/**
 * News Service for Global Industry Daily Briefing
 * Handles fetching/generating latest industry news with multilingual support.
 */

const INDUSTRIES = {
    ROBOTICS: { id: 'robotics', name: { en: 'Robotics', ko: '로봇' }, icon: 'bot' },
    AUTOMOTIVE: { id: 'automotive', name: { en: 'Automotive', ko: '자동차' }, icon: 'car' },
    BATTERY: { id: 'battery', name: { en: 'Battery', ko: '배터리' }, icon: 'battery-charging' },
    WIRING_HARNESS: { id: 'wiring', name: { en: 'Wiring Harness', ko: '와이어링 하네스' }, icon: 'zap' },
    AUTOMATION: { id: 'automation', name: { en: 'Automation', ko: '자동화 설비' }, icon: 'cpu' }
};

export const NewsService = {
    getIndustries() {
        return Object.values(INDUSTRIES);
    },

    /**
     * Simulate fetching latest news for all industries
     */
    async fetchLatestBriefing() {
        return new Promise((resolve) => {
            const today = new Date().toISOString().split('T')[0];
            setTimeout(() => {
                const briefing = {
                    robotics: [
                        { 
                            title: { en: 'Amazon expands robotics investment with new fulfillment technology', ko: '아마존, 신규 물류 기술 도입으로 로보틱스 투자 확대' }, 
                            summary: { en: 'Amazon continues to lead the industry by deploying advanced robotic systems across its global fulfillment network to enhance safety and efficiency.', ko: '아마존이 안전성과 효율성을 높이기 위해 글로벌 물류 네트워크 전반에 첨단 로봇 시스템을 구축하며 산업계를 선도하고 있습니다.' }, 
                            source: 'Amazon News',
                            url: 'https://www.aboutamazon.com/news/operations/amazon-robotics-fulfillment-center-technology',
                            date: today
                        },
                        { 
                            title: { en: 'Humanoid robots taking flight: The latest from Boston Dynamics', ko: '비상하는 휴머노이드 로봇: 보스턴 다이내믹스 최신 현황' }, 
                            summary: { en: 'Boston Dynamics showcases its latest humanoid capabilities, pushing the boundaries of what autonomous mobile robots can achieve in human environments.', ko: '보스턴 다이내믹스가 인간 환경에서 자율 이동 로봇이 달성할 수 있는 한계를 뛰어넘는 최신 휴머노이드 역량을 선보였습니다.' }, 
                            source: 'Boston Dynamics',
                            url: 'https://bostondynamics.com/news/',
                            date: today
                        }
                    ],
                    automotive: [
                        { 
                            title: { en: 'GM Reports Strategic Re-timing of EV Production', ko: 'GM, 전기차 생산 일정 전략적 재조정 보고' }, 
                            summary: { en: 'General Motors reported a strategic shift to focus on a balanced portfolio of ICE and EV platforms to meet evolving market demand.', ko: 'GM이 변화하는 시장 수요에 대응하기 위해 내연기관(ICE) 및 전기차(EV) 플랫폼의 균형 잡힌 포트폴리오에 집중하는 전략적 변화를 발표했습니다.' }, 
                            source: 'GM Investor Relations',
                            url: 'https://investor.gm.com/news-releases/news-release-details/gm-reports-second-quarter-2024-results',
                            date: today
                        },
                        { 
                            title: { en: 'The Start of a New Era: BMW iX3 Flow with Integrated E Ink Technology', ko: 'BMW, E-Ink 기술이 통합된 iX3 플로우 공개' }, 
                            summary: { en: 'BMW revealed the iX3 Flow featuring E Ink technology, allowing the vehicle to change its exterior color at the touch of a button.', ko: 'BMW는 버튼 하나로 차량의 외장 색상을 변경할 수 있는 E-Ink 기술이 적용된 iX3 플로우를 공개했습니다.' }, 
                            source: 'BMW Group PressClub',
                            url: 'https://www.press.bmwgroup.com/global/article/detail/T0364491EN/the-start-of-a-new-era:-the-bmw-group-at-auto-china-2024',
                            date: today
                        }
                    ],
                    battery: [
                        { 
                            title: { en: 'CATL and HyperStrong sign landmark energy storage agreement', ko: 'CATL-HyperStrong, 랜드마크 에너지 저장 협약 체결' }, 
                            summary: { en: 'CATL and HyperStrong signed a major cooperation agreement to promote the development of large-scale energy storage solutions globally.', ko: 'CATL과 HyperStrong이 글로벌 대규모 에너지 저장 솔루션 개발을 촉진하기 위한 주요 협력 협약을 체결했습니다.' }, 
                            source: 'PRNewswire (CATL)',
                            url: 'https://www.prnewswire.com/news-releases/catl-and-hyperstrong-sign-largest-sodium-ion-storage-agreement-302129123.html',
                            date: today
                        },
                        { 
                            title: { en: 'Global energy storage market projections and trends', ko: '글로벌 에너지 저장 시장 전망 및 트렌드' }, 
                            summary: { en: 'Analysis of the rapidly growing energy storage sector, driven by renewable energy integration and grid stability needs.', ko: '재생 에너지 통합 및 그리드 안정성 요구에 힘입어 빠르게 성장하는 에너지 저장 부문에 대한 분석입니다.' }, 
                            source: 'BloombergNEF',
                            url: 'https://about.bnef.com/blog/category/energy-storage/',
                            date: today
                        }
                    ],
                    wiring: [
                        { 
                            title: { en: 'Global Automotive Wire Harness Market Insights', ko: '글로벌 자동차 와이어링 하네스 시장 통찰력' }, 
                            summary: { en: 'Comprehensive analysis of the automotive wiring harness market, including key growth drivers and technological advancements in high-voltage systems.', ko: '고전압 시스템의 주요 성장 동력 및 기술 발전을 포함한 자동차 와이어링 하네스 시장에 대한 종합 분석입니다.' }, 
                            source: 'Business Wire',
                            url: 'https://www.businesswire.com/portal/site/home/search/?searchType=all&searchTerm=wiring+harness',
                            date: today
                        },
                        { 
                            title: { en: 'Nissan\'s breakthrough in automated wire harness assembly', ko: '닛산, 와이어링 하네스 조립 자동화 기술 돌파구' }, 
                            summary: { en: 'Nissan demonstrated a robotic system capable of automating the complex task of wire harness insertion, improving manufacturing efficiency.', ko: '닛산이 와이어링 하네스 삽입이라는 복잡한 작업을 자동화하여 제조 효율성을 높일 수 있는 로봇 시스템을 시연했습니다.' }, 
                            source: 'Nissan Newsroom',
                            url: 'https://usa.nissannews.com/en-US',
                            date: today
                        }
                    ],
                    automation: [
                        { 
                            title: { en: 'Intel and Partners Advance AI-Driven Industrial Automation', ko: '인텔 및 파트너사, AI 기반 산업 자동화 추진' }, 
                            summary: { en: 'Intel announced new collaborations to deliver AI-optimized solutions for factory automation and predictive maintenance.', ko: '인텔이 공장 자동화 및 예측 유지보수를 위한 AI 최적화 솔루션을 제공하기 위한 새로운 협업을 발표했습니다.' }, 
                            source: 'Intel Newsroom',
                            url: 'https://www.intel.com/content/www/us/en/newsroom/home.html',
                            date: today
                        },
                        { 
                            title: { en: 'NVIDIA Showcases Factory-Scale Digital Twins', ko: '엔비디아, 공장 규모의 디지털 트윈 시연' }, 
                            summary: { en: 'NVIDIA demonstrated how generative AI and digital twins are transforming industrial operations through high-fidelity simulations.', ko: '엔비디아가 생성형 AI와 디지털 트윈이 고충실도 시뮬레이션을 통해 어떻게 산업 운영을 변화시키고 있는지 시연했습니다.' }, 
                            source: 'NVIDIA Newsroom',
                            url: 'https://nvidianews.nvidia.com/news/hannover-messe-2024-digital-twin-generative-ai',
                            date: today
                        }
                    ]
                };
                resolve(briefing);
            }, 1000);
        });
    }
};
