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
                            title: { en: 'New Humanoid Robot Unveiled in Japan', ko: '일본에서 공개된 새로운 휴머노이드 로봇' }, 
                            summary: { en: 'A breakthrough in bipedal balance has been achieved by a leading Tokyo tech firm.', ko: '도쿄의 한 주요 기술 기업이 이족 보행 균형 제어에서 획기적인 발전을 이루었습니다.' }, 
                            source: 'Reuters',
                            url: 'https://www.reuters.com/technology/',
                            date: today
                        },
                        { 
                            title: { en: 'Global Robot Sales Surge 15%', ko: '전 세계 로봇 판매량 15% 급증' }, 
                            summary: { en: 'Industrial automation adoption is accelerating across Southeast Asia.', ko: '동남아시아 전역에서 산업 자동화 도입이 가속화되고 있습니다.' }, 
                            source: 'TechCrunch',
                            url: 'https://techcrunch.com/category/robotics/',
                            date: today
                        }
                    ],
                    automotive: [
                        { 
                            title: { en: 'Electric Vehicle Range Reaches 1000km', ko: '전기차 주행 거리 1000km 달성' }, 
                            summary: { en: 'Solid-state battery integration allows for record-breaking travel distances.', ko: '전고체 배터리 통합으로 기록적인 주행 거리가 가능해졌습니다.' }, 
                            source: 'AutoNews',
                            url: 'https://www.autonews.com/',
                            date: today
                        },
                        { 
                            title: { en: 'Autonomous Driving Level 4 Approval', ko: '자율주행 레벨 4 승인' }, 
                            summary: { en: 'Major European cities begin permitting full autonomy for public transport.', ko: '유럽 주요 도시들이 대중교통의 완전 자율주행을 허용하기 시작했습니다.' }, 
                            source: 'The Verge',
                            url: 'https://www.theverge.com/transportation',
                            date: today
                        }
                    ],
                    battery: [
                        { 
                            title: { en: 'New Lithium-Sulfur Battery Patent', ko: '새로운 리튬-황 배터리 특허' }, 
                            summary: { en: 'A startup claims a 40% reduction in production costs using sustainable materials.', ko: '한 스타트업이 지속 가능한 재료를 사용하여 생산 비용을 40% 절감했다고 주장합니다.' }, 
                            source: 'Energy News',
                            url: 'https://www.energy.gov/newsroom',
                            date: today
                        },
                        { 
                            title: { en: 'Global Battery Gigafactory Expansion', ko: '글로벌 배터리 기가팩토리 확장' }, 
                            summary: { en: 'Plans for 5 new factories in North America announced this week.', ko: '이번 주 북미 지역에 5개의 새로운 공장을 건설하겠다는 계획이 발표되었습니다.' }, 
                            source: 'Bloomberg',
                            url: 'https://www.bloomberg.com/energy',
                            date: today
                        }
                    ],
                    wiring: [
                        { 
                            title: { en: 'High-Voltage Wiring Standards Updated', ko: '고전압 와이어링 표준 업데이트' }, 
                            summary: { en: 'New safety protocols for EV charging infrastructure have been finalized.', ko: 'EV 충전 인프라를 위한 새로운 안전 프로토콜이 최종 확정되었습니다.' }, 
                            source: 'SAE International',
                            url: 'https://www.sae.org/news',
                            date: today
                        },
                        { 
                            title: { en: 'Weight-Saving Harness Materials Found', ko: '경량 와이어링 하네스 소재 발견' }, 
                            summary: { en: 'NASA-inspired alloys reduce vehicle weight by up to 5kg.', ko: 'NASA에서 영감을 받은 합금이 차량 무게를 최대 5kg까지 줄여줍니다.' }, 
                            source: 'NASA Tech',
                            url: 'https://techport.nasa.gov/',
                            date: today
                        }
                    ],
                    automation: [
                        { 
                            title: { en: 'AI-Driven Factory Optimization', ko: 'AI 기반 공장 최적화' }, 
                            summary: { en: 'Machine learning models reduce production waste by 30% in trial runs.', ko: '기계 학습 모델이 시험 가동에서 생산 폐기물을 30% 줄였습니다.' }, 
                            source: 'Forbes Tech',
                            url: 'https://www.forbes.com/innovation/',
                            date: today
                        },
                        { 
                            title: { en: 'Collaborative Robots in Small Businesses', ko: '소규모 사업장의 협동 로봇' }, 
                            summary: { en: 'Affordable cobots are transforming the craft manufacturing sector.', ko: '저렴한 협동 로봇이 수공업 제조 분야를 변화시키고 있습니다.' }, 
                            source: 'SME Today',
                            url: 'https://smetoday.co.uk/',
                            date: today
                        }
                    ]
                };
                resolve(briefing);
            }, 1000);
        });
    }
};
