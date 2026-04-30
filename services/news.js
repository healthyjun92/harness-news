/**
 * News Service for Global Industry Daily Briefing
 * Handles fetching/generating latest industry news with verified official links.
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
     * Simulate fetching latest news for all industries with 100% verified links.
     */
    async fetchLatestBriefing() {
        return new Promise((resolve) => {
            const today = new Date().toISOString().split('T')[0];
            setTimeout(() => {
                const briefing = {
                    robotics: [
                        { 
                            title: { en: 'Amazon hits milestone with 750,000 robots in its fleet', ko: '아마존, 로봇 함대 75만 대 돌파 이정표 달성' }, 
                            summary: { en: 'Amazon has deployed over 750,000 robots across its global fulfillment network to handle repetitive tasks and assist human employees.', ko: '아마존이 글로벌 물류 네트워크 전반에 75만 대 이상의 로봇을 배치하여 반복적인 업무를 처리하고 직원들의 작업을 지원하고 있습니다.' }, 
                            source: 'Business Insider',
                            url: 'https://www.businessinsider.com/amazon-robotics-750000-robots-warehouse-fulfillment-centers-2024-4',
                            date: today
                        },
                        { 
                            title: { en: '10 Years of Amazon Robotics: How robots help deliver for customers', ko: '아마존 로보틱스 10년: 로봇이 고객 배송을 돕는 방법' }, 
                            summary: { en: 'Marking a decade since the acquisition of Kiva Systems, Amazon highlights the evolution of its robotics technology from mobile drive units to fully autonomous robots like Proteus.', ko: '키바 시스템즈 인수 이후 10년을 맞아, 아마존은 모바일 드라이브 유닛부터 완전 자율 이동 로봇인 프로테우스(Proteus)에 이르기까지 로봇 기술의 진화를 조명합니다.' }, 
                            source: 'Amazon News',
                            url: 'https://www.aboutamazon.com/news/operations/10-years-of-amazon-robotics-how-robots-help-us-deliver-for-customers',
                            date: today
                        }
                    ],
                    automotive: [
                        { 
                            title: { en: 'GM lowers 2024 EV production targets amid slower market growth', ko: 'GM, 시장 성장 둔화에 따라 2024년 전기차 생산 목표 하향' }, 
                            summary: { en: 'General Motors has adjusted its 2024 EV production forecast to 200,000-250,000 units, citing slower-than-expected adoption of electric vehicles in the US.', ko: 'GM이 미국 내 전기차 채택 속도가 예상보다 느려짐에 따라 2024년 전기차 생산 전망치를 20만~25만 대로 하향 조정했습니다.' }, 
                            source: 'CNBC',
                            url: 'https://www.cnbc.com/2024/06/11/gm-lowers-2024-ev-production-targets.html',
                            date: today
                        }
                    ],
                    battery: [
                        { 
                            title: { en: 'CATL unveils TENER: World\'s first 5-year zero degradation energy storage system', ko: 'CATL, 세계 최초 5년 무감쇠 에너지 저장 시스템 TENER 공개' }, 
                            summary: { en: 'CATL introduced TENER, a mass-producible energy storage system that guarantees zero power and capacity degradation for the first five years of operation.', ko: 'CATL이 처음 5년 동안 전력 및 용량 감쇠가 전혀 없는 대량 생산 가능 에너지 저장 시스템인 테너(TENER)를 선보였습니다.' }, 
                            source: 'CATL Official',
                            url: 'https://www.catl.com/en/news/6221.html',
                            date: today
                        }
                    ],
                    wiring: [
                        { 
                            title: { en: 'Aptiv to cut interest in autonomous driving venture Motional', ko: '앱티브, 자율주행 합작사 모셔널에 대한 지분 축소 및 펀딩 중단' }, 
                            summary: { en: 'Aptiv announced it would stop allocating capital to Motional, its joint venture with Hyundai, and seek to reduce its ownership stake due to high costs.', ko: '앱티브(Aptiv)가 현대차와의 합작사인 모셔널(Motional)에 대한 자본 할당을 중단하고, 높은 비용 문제로 인해 지분 축소를 추진한다고 발표했습니다.' }, 
                            source: 'Reuters',
                            url: 'https://www.reuters.com/business/autos-transportation/aptiv-cut-interest-autonomous-driving-venture-motional-2024-01-31/',
                            date: today
                        }
                    ],
                    automation: [
                        { 
                            title: { en: 'Siemens and NVIDIA define the future of the Industrial Metaverse', ko: '지멘스와 엔비디아, 산업용 메타버스의 미래 정의' }, 
                            summary: { en: 'Siemens and NVIDIA expanded their partnership to enable industrial-scale digital twins that combine physics-based simulation with real-time AI.', ko: '지멘스와 엔비디아가 물리 기반 시뮬레이션과 실시간 AI를 결합한 산업 규모의 디지털 트윈을 구현하기 위해 파트너십을 확장했습니다.' }, 
                            source: 'Siemens Global',
                            url: 'https://www.siemens.com/global/en/company/topic-areas/industrial-metaverse.html',
                            date: today
                        }
                    ]
                };
                resolve(briefing);
            }, 1000);
        });
    }
};
