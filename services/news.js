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
                            title: { en: '1X Technologies begins full-scale manufacturing of NEO home robot', ko: '1X 테크놀로지스, 가정용 로봇 NEO 본격 양산 돌입' }, 
                            summary: { en: '1X Technologies has started full-scale manufacturing of its NEO humanoid robot, targeting 100,000 units annually for logistics and home assistance.', ko: '1X 테크놀로지스는 물류 및 가사 지원을 위한 휴머노이드 로봇 NEO의 연간 10만 대 생산을 목표로 본격적인 양산을 시작했습니다.' }, 
                            mainPoints: {
                                en: ['Targeting 100,000 units annually by 2027', 'Designed for logistics and home assistance', 'Already deployed in factory floors for data collection'],
                                ko: ['2027년까지 연간 10만대 생산 목표', '물류 및 가사 지원 목적으로 설계', '데이터 수집을 위해 자사 공장에 이미 투입 완료']
                            },
                            source: '1X Technologies Newsroom',
                            url: 'https://www.1x.tech/news',
                            date: '2026-05-04',
                            isVerified: true
                        },
                        { 
                            title: { en: 'Serve Robotics expands Level 4 autonomous delivery fleet', ko: '서브 로보틱스, 레벨 4 자율주행 배달 로봇 플릿 대규모 확장' }, 
                            summary: { en: 'Serve Robotics has expanded its Level 4 autonomous delivery fleet to 2,000 robots, serving major food delivery platforms across multiple cities.', ko: '서브 로보틱스는 레벨 4 자율주행 배달 로봇 플릿을 2,000대로 확장하여 여러 도시에서 주요 음식 배달 플랫폼을 지원합니다.' }, 
                            mainPoints: {
                                en: ['Fleet expanded to 2,000 Level 4 robots', 'Partnered with Uber Eats and DoorDash', 'Serving over 3,500 restaurants'],
                                ko: ['레벨 4 자율주행 로봇 2,000대로 확장', '우버 이츠 및 도어대시와 파트너십 강화', '3,500개 이상의 레스토랑에 서비스 제공']
                            },
                            source: 'Serve Robotics Investors',
                            url: 'https://investor.serverobotics.com/news-releases',
                            date: '2026-05-02',
                            isVerified: true
                        }
                    ],
                    automotive: [
                        { 
                            title: { en: 'Ford accelerates development of $30,000 low-cost EV platform', ko: '포드, 3만 달러 이하의 저가형 전기차 플랫폼 개발 가속화' }, 
                            summary: { en: 'Ford\'s "Skunk Works" team is finalizing a new low-cost EV platform aimed at producing a $30,000 electric truck to compete with affordable imports.', ko: '포드의 특수 개발팀이 저렴한 수입차와 경쟁하기 위해 3만 달러 수준의 전기 트럭 생산을 목표로 하는 새로운 저가형 전기차 플랫폼을 마무리하고 있습니다.' }, 
                            mainPoints: {
                                en: ['Targeting a $30,000 price point', 'Developed by specialized "Skunk Works" team', 'Aimed to compete with low-cost Chinese EV imports'],
                                ko: ['3만 달러(약 4천만 원) 가격대 목표', '특수 개발팀(Skunk Works) 주도 하에 개발', '저가형 중국산 전기차 수입에 대응하기 위한 전략']
                            },
                            source: 'Ford Media Center',
                            url: 'https://media.ford.com/',
                            date: '2026-05-05',
                            isVerified: true
                        },
                        { 
                            title: { en: 'Toyota announces major proprietary AI development initiative', ko: '토요타, 독자적인 AI 개발 이니셔티브 전격 발표' }, 
                            summary: { en: 'Toyota has announced a strategic shift to build its own AI systems in-house to protect manufacturing IP and secure jobs.', ko: '토요타는 제조 전문성을 보호하고 일자리를 확보하기 위해 자체적인 AI 시스템을 사내에서 구축하는 전략적 전환을 발표했습니다.' }, 
                            mainPoints: {
                                en: ['Focus on building proprietary in-house AI', 'Aims to protect manufacturing IP and jobs', 'Reduces reliance on big tech partnerships'],
                                ko: ['독자적인 사내 AI 구축에 집중', '제조 지식재산권(IP) 및 일자리 보호 목적', '빅테크 기업과의 파트너십 의존도 감소']
                            },
                            source: 'Toyota Global Newsroom',
                            url: 'https://global.toyota/en/newsroom/',
                            date: '2026-05-03',
                            isVerified: true
                        }
                    ],
                    battery: [
                        { 
                            title: { en: 'CATL secures historic 60GWh Sodium-Ion battery agreement', ko: 'CATL, 60GWh 규모의 나트륨 이온 배터리 공급 계약 체결' }, 
                            summary: { en: 'CATL has reached a mass-production breakthrough for its sodium-ion batteries, securing a 60GWh supply agreement for upcoming passenger EVs.', ko: 'CATL은 나트륨 이온 배터리의 대량 생산 돌파구를 마련하며, 향후 출시될 승용 전기차를 위한 60GWh 규모의 공급 계약을 확보했습니다.' }, 
                            mainPoints: {
                                en: ['Historic 60GWh supply agreement signed', 'Breakthrough for mass production of cheaper sodium-ion cells', 'Expected to debut in the Changan Nevo A06'],
                                ko: ['역대 최대인 60GWh 공급 계약 체결', '더 저렴한 나트륨 이온 셀의 대량 생산 돌파구', '창안 네보 A06 모델에 최초 탑재 예상']
                            },
                            source: 'CATL News',
                            url: 'https://www.catl.com/en/news/',
                            date: '2026-05-06',
                            isVerified: true
                        },
                        { 
                            title: { en: 'Honda and Nissan pivot strategy towards hybrids in North America', ko: '혼다·닛산, 북미 시장에서 하이브리드 중심 전략으로 선회' }, 
                            summary: { en: 'In response to shifting consumer demand and infrastructure challenges, Honda and Nissan are pulling back on pure EV plants to focus heavily on hybrid models in North America.', ko: '소비자 수요 변화와 인프라 문제에 대응하여, 혼다와 닛산은 북미에서 순수 전기차 공장 계획을 축소하고 하이브리드 모델에 집중하고 있습니다.' }, 
                            mainPoints: {
                                en: ['Suspension of major pure EV plant projects in Canada and US', 'Strategic pivot to meet rising demand for hybrid vehicles', 'Adjustment to current EV market cooling'],
                                ko: ['캐나다 및 미국의 주요 순수 전기차 공장 프로젝트 보류', '하이브리드 차량 수요 증가에 맞춘 전략적 선회', '최근 전기차 시장의 수요 둔화에 따른 조정']
                            },
                            source: 'Honda Global Newsroom',
                            url: 'https://global.honda/en/newsroom/',
                            date: '2026-05-02',
                            isVerified: true
                        }
                    ],
                    wiring: [
                        { 
                            title: { en: 'Aptiv launches industry-first 100% recycled copper wiring harness', ko: '앱티브, 업계 최초 100% 재활용 구리 와이어링 하네스 출시' }, 
                            summary: { en: 'Moving towards a circular economy, Aptiv has introduced a new vehicle wiring harness program utilizing 100% recycled copper without compromising conductivity.', ko: '순환 경제로 나아가기 위해 앱티브는 전도성을 저하시키지 않으면서 100% 재활용 구리를 활용하는 새로운 차량용 와이어링 하네스 프로그램을 도입했습니다.' }, 
                            mainPoints: {
                                en: ['First program to use 100% recycled copper', 'Significantly reduces carbon footprint of harness manufacturing', 'Maintains strict automotive conductivity standards'],
                                ko: ['100% 재활용 구리를 사용하는 최초의 프로그램', '하네스 제조의 탄소 발자국 대폭 감소', '엄격한 자동차 전도성 표준 유지']
                            },
                            source: 'Aptiv Newsroom',
                            url: 'https://www.aptiv.com/en/newsroom',
                            date: '2026-05-04',
                            isVerified: true
                        },
                        { 
                            title: { en: 'Lear Corporation reports increased margins via robotic harness assembly', ko: '리어 코퍼레이션, 로봇 하네스 조립을 통한 이익률 증가 발표' }, 
                            summary: { en: 'Lear Corporation highlighted a significant margin improvement in Q1 2026, attributed to the successful integration of robotic assembly and digital quality control in their wiring harness facilities.', ko: '리어 코퍼레이션은 와이어링 하네스 시설에 로봇 조립 및 디지털 품질 관리를 성공적으로 통합한 덕분에 2026년 1분기 이익률이 크게 개선되었다고 발표했습니다.' }, 
                            mainPoints: {
                                en: ['Margin improvement driven by automated assembly', 'Deployment of digital quality control systems', 'Addressing the rising complexity of high-voltage EV wiring'],
                                ko: ['자동화된 조립 공정을 통한 이익률 개선', '디지털 품질 관리 시스템 도입', '복잡해지는 고전압 전기차 배선 문제 해결']
                            },
                            source: 'Lear Newsroom',
                            url: 'https://lear.com/news',
                            date: '2026-05-01',
                            isVerified: true
                        }
                    ]
                };
                resolve(briefing);
            }, 1000);
        });
    }
};