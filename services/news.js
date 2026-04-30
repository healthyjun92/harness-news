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

    async fetchLatestBriefing() {
        return new Promise((resolve) => {
            const today = new Date().toISOString().split('T')[0];
            setTimeout(() => {
                const briefing = {
                    robotics: [
                        { 
                            title: { en: 'Amazon introduces Proteus, its first fully autonomous mobile robot', ko: '아마존, 최초의 완전 자율 이동 로봇 "프로테우스" 공개' }, 
                            summary: { en: 'Proteus is Amazons first fully autonomous mobile robot that can navigate around employees safely.', ko: '프로테우스는 아마존의 첫 번째 완전 자율 이동 로봇으로, 직원들과 같은 공간에서 안전하게 협업하도록 설계되었습니다.' }, 
                            mainPoints: {
                                en: ['Navigates safely around people without cages', 'Handles heavy cart movement autonomously', 'Deploys advanced safety and navigation tech'],
                                ko: ['안전 펜스 없이 사람 사이를 안전하게 이동', '무거운 카트 운송 작업을 자율적으로 수행', '첨단 안전 및 내비게이션 기술 탑재']
                            },
                            source: 'Amazon News',
                            url: 'https://www.aboutamazon.com/news/operations/amazon-introduces-first-fully-autonomous-mobile-robot',
                            date: today,
                            isVerified: true
                        }
                    ],
                    automotive: [
                        { 
                            title: { en: 'GM delivers first Ultium-based EVs, scaling global production', ko: 'GM, 얼티엄 플랫폼 기반 전기차 첫 인도 및 생산 확대 가속' }, 
                            summary: { en: 'General Motors is hitting key milestones in its EV transition by delivering new Ultium-based models to customers.', ko: 'GM이 새로운 얼티엄 플랫폼 기반 모델들을 고객에게 인도하며 전기차 전환의 핵심 이정표를 달성하고 있습니다.' }, 
                            mainPoints: {
                                en: ['First customer deliveries of BrightDrop and Hummer EV', 'Expansion of battery cell production capacity', 'Unified architecture for all vehicle segments'],
                                ko: ['브라이트드롭 및 허머 EV의 첫 고객 인도 시작', '배터리 셀 생산 능력 대폭 확장', '모든 차급을 아우르는 통합 아키텍처 적용']
                            },
                            source: 'GM Newsroom',
                            url: 'https://news.gm.com/newsroom.detail.html/Pages/news/us/en/2021/dec/1217-ultium-ev.html',
                            date: today,
                            isVerified: true
                        }
                    ],
                    battery: [
                        { 
                            title: { en: 'CATL debuts Shenxing, the world’s first 4C superfast charging LFP battery', ko: 'CATL, 세계 최초 4C 초급속 충전 LFP 배터리 "션싱" 공개' }, 
                            summary: { en: 'CATL has launched Shenxing, a revolutionary LFP battery capable of delivering 400km of range with a 10-minute charge.', ko: 'CATL이 10분 충전으로 400km 주행이 가능한 혁신적인 LFP 배터리 "션싱(Shenxing)"을 선보였습니다.' }, 
                            mainPoints: {
                                en: ['400km range with just a 10-minute charge', 'First LFP battery to support 4C charging', 'Significant boost in low-temperature performance'],
                                ko: ['10분 충전으로 400km 주행 거리 확보', '4C 충전을 지원하는 세계 최초의 LFP 배터리', '저온 환경에서의 성능 저하 대폭 개선']
                            },
                            source: 'CATL News',
                            url: 'https://www.catl.com/en/news/6022.html',
                            date: today,
                            isVerified: true
                        }
                    ],
                    wiring: [
                        { 
                            title: { en: 'Aptiv Smart Vehicle Architecture simplifies wiring complexity', ko: '앱티브 스마트 차량 아키텍처, 배선 복잡성 획기적 개선' }, 
                            summary: { en: 'Aptiv is reducing vehicle weight and cost by simplifying wiring harnesses through zonal controllers.', ko: '앱티브(Aptiv)가 구역 컨트롤러를 통해 배선 하네스를 단순화함으로써 차량 무게와 비용을 줄이고 있습니다.' }, 
                            mainPoints: {
                                en: ['Reduction in wiring harness length and weight', 'Zonal architecture for software-defined vehicles', 'Improved reliability and manufacturing efficiency'],
                                ko: ['배선 하네스 길이 및 무게 대폭 절감', 'SDV 구현을 위한 구역 기반 아키텍처', '신뢰성 향상 및 제조 효율성 최적화']
                            },
                            source: 'Aptiv Insights',
                            url: 'https://www.aptiv.com/en/insights/article/smart-vehicle-architecture-is-the-key-to-software-defined-vehicles',
                            date: today,
                            isVerified: true
                        }
                    ],
                    automation: [
                        { 
                            title: { en: 'Siemens and NVIDIA to enable Industrial Metaverse', ko: '지멘스와 엔비디아, 산업용 메타버스 구현을 위한 협력 강화' }, 
                            summary: { en: 'Siemens is connecting its Xcelerator platform with NVIDIA Omniverse to lead industrial automation.', ko: '지멘스가 엑셀러레이터 플랫폼과 엔비디아 옴니버스를 연결하여 산업 자동화의 미래를 선도하고 있습니다.' }, 
                            mainPoints: {
                                en: ['Integration of digital twins with real-time AI', 'Photorealistic, physics-based simulations', 'Faster decision-making for complex manufacturing'],
                                ko: ['디지털 트윈과 실시간 AI의 심층 결합', '물리 기반의 사실적인 시뮬레이션 구현', '복잡한 제조 공정의 의사결정 속도 향상']
                            },
                            source: 'Siemens Press',
                            url: 'https://press.siemens.com/global/en/pressrelease/siemens-and-nvidia-partner-enable-industrial-metaverse',
                            date: today,
                            isVerified: true
                        }
                    ]
                };
                resolve(briefing);
            }, 1000);
        });
    }
};
