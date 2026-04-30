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
                            title: { en: 'Amazon expands robotic fleet with "Proteus" fully autonomous mobile robot', ko: '아마존, 완전 자율 이동 로봇 "프로테우스" 도입으로 물류 자동화 가속' }, 
                            summary: { en: 'Amazon has introduced Proteus, its first fully autonomous mobile robot that can navigate around employees.', ko: '아마존이 직원들과 같은 공간에서 안전하게 협업할 수 있는 완전 자율 이동 로봇 "프로테우스(Proteus)"를 공개했습니다.' }, 
                            mainPoints: {
                                en: ['First fully autonomous mobile robot in Amazon warehouses', 'Navigates around people safely'],
                                ko: ['아마존 물류 창고 최초의 완전 자율 이동 로봇', '첨단 안전 기술로 사람과 협업 가능']
                            },
                            source: 'Amazon News',
                            url: 'https://www.aboutamazon.com/news/operations/amazon-introduces-first-fully-autonomous-mobile-robot',
                            date: today,
                            isVerified: true
                        }
                    ],
                    automotive: [
                        { 
                            title: { en: 'GM reaffirms commitment to all-electric future', ko: 'GM, 차세대 배터리 플랫폼 기반의 전동화 전략 강화' }, 
                            summary: { en: 'General Motors continues its transition to EVs by scaling up Ultium-based models.', ko: '제너럴 모터스(GM)가 얼티엄(Ultium) 플랫폼 기반의 전기차 생산을 확대하고 있습니다.' }, 
                            mainPoints: {
                                en: ['Scaling production of Ultium platform vehicles', 'Expansion of charging networks'],
                                ko: ['얼티엄 플랫폼 기반 전기차 생산 가속화', '충전 인프라 대규모 확장']
                            },
                            source: 'GM Newsroom',
                            url: 'https://news.gm.com/newsroom.html',
                            date: today,
                            isVerified: true
                        }
                    ],
                    battery: [
                        { 
                            title: { en: 'CATL leads global EV battery innovation', ko: 'CATL, 글로벌 전기차 배터리 시장 점유율 및 기술 혁신 선도' }, 
                            summary: { en: 'CATL remains at the forefront of the battery industry focusing on LFP technologies.', ko: 'CATL이 LFP 배터리 기술력을 통해 글로벌 배터리 산업의 리더십을 유지하고 있습니다.' }, 
                            mainPoints: {
                                en: ['Dominant market share in global EV batteries', 'Breakthroughs in LFP technology'],
                                ko: ['글로벌 전기차 배터리 시장 점유율 1위 유지', '초급속 충전 LFP 배터리 기술 혁신']
                            },
                            source: 'CATL Press',
                            url: 'https://www.catl.com/en/news/',
                            date: today,
                            isVerified: true
                        }
                    ],
                    wiring: [
                        { 
                            title: { en: 'Aptiv leads SDV architecture transformation', ko: '앱티브, 소프트웨어 정의 차량(SDV) 아키텍처 전환 주도' }, 
                            summary: { en: 'Aptiv is redefining vehicle wiring and data systems through centralized computing.', ko: '앱티브(Aptiv)가 차량의 복잡한 배선을 단순화하는 SDV 기술 혁신을 주도하고 있습니다.' }, 
                            mainPoints: {
                                en: ['Simplification of wiring harness', 'Focus on Smart Vehicle Architecture'],
                                ko: ['구역 아키텍처를 통한 배선 하네스 단순화', '스마트 차량 아키텍처 기술력 집중']
                            },
                            source: 'Aptiv Media',
                            url: 'https://www.aptiv.com/en/newsroom',
                            date: today,
                            isVerified: true
                        }
                    ],
                    automation: [
                        { 
                            title: { en: 'Siemens accelerates industrial digital transformation', ko: '지멘스, 산업용 메타버스 및 디지털 트윈을 통한 제조 혁신' }, 
                            summary: { en: 'Siemens is combining the real and digital worlds through its Xcelerator platform.', ko: '지멘스가 엑셀러레이터 플랫폼을 통해 현실과 디지털 세계를 결합하고 있습니다.' }, 
                            mainPoints: {
                                en: ['Expansion of the Siemens Xcelerator ecosystem', 'AI integration in industrial automation'],
                                ko: ['지멘스 엑셀러레이터 생태계 지속 확장', '산업 자동화 부문의 AI 기술 결합']
                            },
                            source: 'Siemens Press',
                            url: 'https://press.siemens.com/global/en',
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
