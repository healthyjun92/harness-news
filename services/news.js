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
            setTimeout(() => {
                const briefing = {
                    robotics: [
                        { 
                            title: { en: 'Meta pushes into humanoid robotics with ARI acquisition', ko: '메타, ARI 인수를 통해 휴머노이드 로봇 시장 본격 진출' }, 
                            summary: { en: 'Meta has acquired Assured Robot Intelligence (ARI) to develop humanoid hardware specifically for household chores, integrating ARI\'s expertise into its Superintelligence Labs.', ko: '메타(Meta)가 가사 지원에 특화된 휴머노이드 하드웨어를 개발하기 위해 로봇 스타트업 ARI(Assured Robot Intelligence)를 인수하여 자사의 초지능 연구소에 통합했습니다.' }, 
                            mainPoints: {
                                en: ['Focus on "physical artificial general intelligence"', 'Developing humanoid hardware for household chores', 'Integration into Meta Superintelligence Labs'],
                                ko: ['"물리적 인공 일반 지능(AGI)" 개발에 초점', '가사 노동을 지원하는 휴머노이드 하드웨어 개발', '메타 초지능 연구소(Superintelligence Labs)와 기술 통합']
                            },
                            source: 'Silicon Republic',
                            url: 'https://www.siliconrepublic.com/machines/meta-acquired-robotics-startup-assured-robot-intelligence',
                            date: '2026-05-05',
                            isVerified: true
                        },
                        { 
                            title: { en: 'Serve Robotics expands autonomous delivery fleet to 2,000 units', ko: '서브 로보틱스, 자율주행 배달 로봇 플릿 2,000대로 대폭 확장' }, 
                            summary: { en: 'Serve Robotics reported its fleet has grown to 2,000 robots, partnering with over 3,500 restaurants via Uber Eats and DoorDash, while navigating new city regulations.', ko: '서브 로보틱스는 우버 이츠 및 도어대시와의 파트너십을 통해 배달 로봇을 2,000대로 확장하고 3,500개 이상의 레스토랑에 서비스를 제공하고 있다고 발표했습니다.' }, 
                            mainPoints: {
                                en: ['Fleet expanded to 2,000 robots', 'Partnerships with Uber Eats and DoorDash', 'Navigating new sidewalk robot moratoriums in some cities'],
                                ko: ['자율주행 로봇 2,000대로 확장 운영', '우버 이츠 및 도어대시 등 주요 플랫폼과 파트너십', '일부 도시의 보도 주행 로봇 규제 및 모라토리엄 대응 중']
                            },
                            source: 'LA Times',
                            url: 'https://www.latimes.com/business/story/2026-05-01/serve-robotics-expansion',
                            date: '2026-05-01',
                            isVerified: true
                        }
                    ],
                    automotive: [
                        { 
                            title: { en: 'Ford announces next-generation F-150 Lightning EREV', ko: '포드, 주행거리 연장형 전기차(EREV) 기반 차세대 F-150 라이트닝 발표' }, 
                            summary: { en: 'Ford has announced a next-generation F-150 Lightning featuring an Extended-Range Electric Vehicle (EREV) powertrain, aiming for over 700 miles of range for heavy towing.', ko: '포드는 700마일 이상의 주행거리를 제공하여 무거운 짐을 견인하는 사용자들을 겨냥한 주행거리 연장형 전기차(EREV) 파워트레인을 탑재한 차세대 F-150 라이트닝을 발표했습니다.' }, 
                            mainPoints: {
                                en: ['Features Extended-Range Electric Vehicle (EREV) powertrain', 'Targeting over 700 miles of range', 'Specifically designed for users who tow heavy loads'],
                                ko: ['주행거리 연장형 전기차(EREV) 파워트레인 채택', '700마일(약 1,126km) 이상의 획기적인 주행거리 목표', '무거운 화물을 견인하는 픽업트럭 사용자에 특화']
                            },
                            source: 'Top Electric SUV',
                            url: 'https://topelectricsuv.com/news/ford/ford-f-150-lightning-erev/',
                            date: '2026-04-29',
                            isVerified: true
                        },
                        { 
                            title: { en: 'Samsung SDI secures major battery supply deal with Mercedes-Benz', ko: '삼성SDI, 메르세데스-벤츠와 대규모 배터리 공급 계약 체결' }, 
                            summary: { en: 'Samsung SDI secured a multi-year agreement to provide high-energy NCM batteries for future compact and mid-size electric SUVs from Mercedes-Benz.', ko: '삼성SDI는 메르세데스-벤츠의 차세대 콤팩트 및 중형 전기 SUV에 고에너지 NCM(니켈·코발트·망간) 배터리를 공급하는 다년간의 계약을 체결했습니다.' }, 
                            mainPoints: {
                                en: ['First major supply deal between Samsung SDI and Mercedes-Benz', 'Supplying high-energy NCM batteries', 'Production begins at Hungary plant in Q2 2026'],
                                ko: ['삼성SDI와 벤츠 간의 첫 번째 대규모 공급 계약', '고에너지 NCM(니켈·코발트·망간) 배터리 납품', '2026년 2분기부터 헝가리 공장에서 생산 시작']
                            },
                            source: 'WardsAuto',
                            url: 'https://www.wardsauto.com/vehicles/samsung-sdi-mercedes-benz-partnership',
                            date: '2026-04-21',
                            isVerified: true
                        }
                    ],
                    battery: [
                        { 
                            title: { en: 'MG Motor achieves mass production of semi-solid-state batteries', ko: 'MG 모터, 세계 최초 반고체 배터리 대량 생산 달성' }, 
                            summary: { en: 'MG has become the first manufacturer globally to achieve mass production of semi-solid-state batteries, launching in the European market by late 2026.', ko: 'MG 모터(SAIC 산하)는 세계 최초로 반고체 배터리의 대량 생산에 성공했으며, 2026년 말까지 유럽 시장에 출시될 전기차에 이를 탑재할 계획입니다.' }, 
                            mainPoints: {
                                en: ['First global mass production of semi-solid-state EV batteries', 'To be featured in the MG4 EV Urban range', 'European market launch expected by the end of 2026'],
                                ko: ['전기차용 반고체 배터리의 세계 최초 대량 생산 단계 진입', '향후 출시될 MG4 EV Urban 라인업에 탑재 예정', '2026년 말 유럽 시장부터 본격적인 판매 시작']
                            },
                            source: 'EV Magazine',
                            url: 'https://evmagazine.com/technology/mg-motor-semi-solid-state-batteries',
                            date: '2026-05-02',
                            isVerified: true
                        },
                        { 
                            title: { en: 'Factorial Energy partners with Karma Automotive for solid-state tech', ko: '팩토리얼 에너지, 카르마 오토모티브와 전고체 배터리 파트너십 체결' }, 
                            summary: { en: 'Solid-state battery startup Factorial Energy has confirmed a partnership to integrate its "FEST" solid-state batteries into the upcoming Karma Kaveya super-coupe.', ko: '미국의 전고체 배터리 스타트업 팩토리얼 에너지는 자사의 "FEST" 전고체 배터리를 카르마 오토모티브의 예정된 슈퍼 쿠페 모델인 \'카베야(Kaveya)\'에 통합하는 파트너십을 발표했습니다.' }, 
                            mainPoints: {
                                en: ['Integrating "FEST" solid-state batteries into high-performance EVs', 'Partnership with Karma Automotive', 'Parallel pivot towards military drones and robotics'],
                                ko: ['고성능 전기차에 "FEST" 전고체 배터리 시스템 통합', '카르마 오토모티브(Karma Automotive)와 전략적 제휴', '군용 드론 및 로봇 분야로의 상용화 병행 추진']
                            },
                            source: 'CleanTechnica',
                            url: 'https://cleantechnica.com/2026/05/03/factorial-energy-karma-automotive/',
                            date: '2026-05-03',
                            isVerified: true
                        }
                    ],
                    wiring: [
                        { 
                            title: { en: 'Ford recalls 140,000 Ranger trucks over wiring harness fire risk', ko: '포드, 와이어링 하네스 화재 위험으로 레인저 픽업트럭 14만 대 리콜' }, 
                            summary: { en: 'Ford has recalled over 140,000 Ranger pickup trucks (2024–2026) due to a wiring harness defect near the sun visor that can cause electrical shorts and potential fires.', ko: '포드는 선바이저 근처의 와이어링 하네스 결함으로 인해 전기 합선 및 화재가 발생할 수 있는 위험이 발견되어 2024~2026년형 레인저 픽업트럭 14만 대 이상을 리콜했습니다.' }, 
                            mainPoints: {
                                en: ['Recall affects 140,000 Ranger trucks (2024-2026 models)', 'Wiring harness can be pinched, stripping insulation', 'Risk of electrical short and potential fire in the A-pillar'],
                                ko: ['2024~2026년형 포드 레인저 트럭 14만 대 리콜 실시', '하네스 배선이 눌리면서 절연체가 손상될 위험', 'A필러 내부 전기 합선으로 인한 화재 발생 가능성']
                            },
                            source: 'First Coast News',
                            url: 'https://www.firstcoastnews.com/article/news/nation-world/ford-ranger-recall-fire-risk-wiring-harness/',
                            date: '2026-04-21',
                            isVerified: true
                        },
                        { 
                            title: { en: 'Volkswagen issues recall for Taos SUVs due to short wiring harness', ko: '폭스바겐, 짧은 배선 하네스 결함으로 타오스(Taos) SUV 리콜' }, 
                            summary: { en: 'Volkswagen issued a recall for approximately 36,900 Taos SUVs because the fuel pressure sensor wiring harness is too short, which could cause fuel leaks during a rear-end collision.', ko: '폭스바겐은 연료 압력 센서의 와이어링 하네스가 너무 짧게 설계되어 후방 추돌 시 연료 누출을 일으킬 수 있는 결함으로 약 3만 6천9백 대의 타오스(Taos) SUV를 리콜했습니다.' }, 
                            mainPoints: {
                                en: ['Recall covers 36,900 Taos SUVs (2025–2026 models)', 'Fuel pressure sensor wiring harness is too short', 'Could dislodge sensor and cause fuel leaks in collisions'],
                                ko: ['2025~2026년형 폭스바겐 타오스 36,900대 리콜 진행', '연료 압력 센서에 연결되는 와이어링 하네스의 길이 부족', '후방 추돌 시 센서가 분리되어 연료가 누출될 위험']
                            },
                            source: 'Guide Auto Web',
                            url: 'https://www.guideautoweb.com/en/news/volkswagen-taos-fuel-sensor-wiring-harness-recall/',
                            date: '2026-04-30',
                            isVerified: true
                        }
                    ]
                };
                resolve(briefing);
            }, 1000);
        });
    }
};