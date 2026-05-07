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
                            title: { en: 'Nvidia scales "Physical AI" through global robotics partnerships', ko: '엔비디아, 글로벌 로봇 파트너십을 통해 "물리적 AI" 생태계 대폭 확장' }, 
                            summary: { en: 'Nvidia announced a massive expansion of its robotics ecosystem, partnering with ABB, Agility, and Figure to deploy software that enables robots to perceive and reason in complex factory environments.', ko: '엔비디아가 ABB, Agility, Figure 등 주요 기업들과 파트너십을 맺고 공장 등 복잡한 환경에서 로봇이 스스로 인지하고 추론할 수 있도록 돕는 "물리적 AI" 소프트웨어 생태계를 확장한다고 발표했습니다.' }, 
                            mainPoints: {
                                en: ['Partnership with ABB, Agility, and Figure', 'Focus on software for autonomous factory reasoning', 'Moving beyond simple programmed movements to adaptive AI'],
                                ko: ['ABB, Agility, Figure 등 글로벌 로봇 선도 기업과 협업', '자율적 추론이 가능한 공장 자동화 소프트웨어에 초점', '단순 프로그래밍을 넘어선 적응형 AI 로봇 도입 가속화']
                            },
                            source: 'AI Business',
                            url: 'https://aibusiness.com/verticals/nvidia-scales-physical-ai-ecosystem',
                            date: '2026-05-06',
                            isVerified: true
                        },
                        { 
                            title: { en: 'Ukraine to procure 25,000 UGVs in 2026 for frontline logistics', ko: '우크라이나, 2026년 최전방 보급을 위해 지상 무인 로봇(UGV) 25,000대 도입' }, 
                            summary: { en: 'Ukraine has set a goal to procure 25,000 unmanned ground vehicles (UGVs) by late 2026 to replace human personnel in dangerous frontline logistics and mine clearance roles.', ko: '우크라이나가 2026년 말까지 25,000대의 지상 무인 로봇(UGV)을 도입하여, 위험한 최전방 물자 보급 및 지뢰 제거 임무에서 인력을 대체하겠다는 계획을 수립했습니다.' }, 
                            mainPoints: {
                                en: ['Targeting 25,000 units by end of 2026', 'Focus on logistics and mine clearance', 'Replacing humans in high-risk zones'],
                                ko: ['2026년 말까지 25,000대 도입 목표', '보급 및 지뢰 제거 임무에 우선 배치', '고위험 지역 내 인력 피해 최소화 및 작전 효율 증대']
                            },
                            source: 'Calibre Defence',
                            url: 'https://calibredefence.co.uk/ukraine-ugv-expansion-2026',
                            date: '2026-05-06',
                            isVerified: true
                        }
                    ],
                    automotive: [
                        { 
                            title: { en: 'BMW releases pricing for 2027 iX3 with 434-mile range', ko: 'BMW, 434마일 주행거리 갖춘 2027년형 iX3 가격 및 상세 스펙 공개' }, 
                            summary: { en: 'BMW has released full pricing for the new iX3 50 xDrive, starting at $62,850 and offering an EPA-estimated range of 434 miles, outperforming several key rivals.', ko: 'BMW가 차세대 iX3 50 xDrive의 가격을 62,850달러부터 시작한다고 발표했습니다. EPA 기준 434마일(약 698km)의 주행거리를 제공하여 동급 경쟁 모델들을 압도하고 있습니다.' }, 
                            mainPoints: {
                                en: ['Starting price confirmed at $62,850', 'EPA-estimated range of up to 434 miles', 'Positioned to compete with Porsche Macan EV and Cadillac Optiq'],
                                ko: ['시작 가격 62,850달러(약 8,500만원) 확정', 'EPA 기준 최대 434마일의 획기적인 주행거리 달성', '포르쉐 마칸 EV 및 캐딜락 옵틱과 직접 경쟁 구도']
                            },
                            source: 'Car and Driver',
                            url: 'https://www.caranddriver.com/news/a2027-bmw-ix3-pricing-range/',
                            date: '2026-05-06',
                            isVerified: true
                        },
                        { 
                            title: { en: 'Honda pivots to hybrids, withdrawing from $15B Canadian EV plant', ko: '혼다, 전기차 수요 둔화에 하이브리드 집중... 캐나다 150억 달러 규모 EV 공장 철회' }, 
                            summary: { en: 'Honda has reportedly withdrawn from a planned $15-billion EV plant in Ontario, Canada, signaling a strategic shift toward hybrid vehicles as EV demand cools in North America.', ko: '혼다가 캐나다 온타리오주에 계획했던 150억 달러 규모의 전기차 공장 건설 계획을 철회했습니다. 이는 북미 지역의 EV 수요 둔화에 대응하여 하이브리드 차량에 집중하려는 전략적 변화로 풀이됩니다.' }, 
                            mainPoints: {
                                en: ['Withdrawing from $15B Ontario EV plant', 'Strategic pivot toward hybrid vehicle production', 'Response to cooling EV demand in North America'],
                                ko: ['온타리오주 150억 달러 규모 EV 공장 투자 계획 철회', '하이브리드 차량 생산 확대로 전략적 노선 수정', '북미 시장 내 전기차 수요 감소에 따른 실용적 대응']
                            },
                            source: 'National Post',
                            url: 'https://nationalpost.com/news/honda-withdraws-ontario-ev-plant',
                            date: '2026-05-06',
                            isVerified: true
                        }
                    ],
                    battery: [
                        { 
                            title: { en: 'CATL begins commercial rollout of "Naxtra" sodium-ion batteries', ko: 'CATL, "Naxtra" 나트륨 이온 배터리 본격 상용화 및 출하 시작' }, 
                            summary: { en: 'CATL has officially started the commercial deployment of its sodium-ion batteries, with the Changan Nevo A06 expected to be the first mass-produced car to use them.', ko: '세계 최대 배터리 기업 CATL이 나트륨 이온 배터리의 본격적인 상용화를 시작했습니다. 장안자동차의 Nevo A06가 이 배터리를 탑재한 첫 번째 양산차가 될 예정입니다.' }, 
                            mainPoints: {
                                en: ['Commercial deployment of "Naxtra" sodium-ion cells', 'Changan Nevo A06 to be the first mass-produced passenger EV with Na-ion', 'Signed 60GWh strategic partnership with HyperStrong for energy storage'],
                                ko: ['"Naxtra" 브랜드 나트륨 이온 배터리 상용 보급 시작', '장안자동차 Nevo A06 모델에 최초 탑재 예정', '에너지 저장 장치(ESS) 분야에서도 HyperStrong과 60GWh 규모 협력 체결']
                            },
                            source: 'EV Tech News',
                            url: 'https://evtech.news/catl-sodium-ion-commercial-rollout-2026',
                            date: '2026-05-06',
                            isVerified: true
                        },
                        { 
                            title: { en: 'World’s first semi-solid-state battery electric bike launched', ko: '세계 최초 반고체 배터리 탑재 전기 자전거 "Revv1 EVO" 출시' }, 
                            summary: { en: 'Ride1Up has announced the Revv1 EVO, the first e-bike to feature a semi-solid-state battery, offering double the cycle life and superior cold-weather performance.', ko: 'Ride1Up이 세계 최초로 반고체 배터리를 탑재한 전기 자전거 Revv1 EVO를 발표했습니다. 기존 배터리 대비 두 배의 수명과 영하 20도에서도 우수한 성능을 유지하는 것이 특징입니다.' }, 
                            mainPoints: {
                                en: ['Features semi-solid-state battery for double lifespan (1,200+ cycles)', 'Maintains 70% capacity at -20°C', 'Significant safety improvement over traditional Li-ion'],
                                ko: ['반고체 배터리 채택으로 수명 2배 연장 (1,200회 이상 충방전)', '영하 20도 극한의 추위에서도 용량의 70% 유지', '기존 리튬 이온 배터리 대비 화재 안정성 대폭 개선']
                            },
                            source: 'Electrek',
                            url: 'https://electrek.co/2026/05/06/ride1up-revv1-evo-semi-solid-state-battery/',
                            date: '2026-05-06',
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
                    ],
                    automation: [
                        { 
                            title: { en: 'Rockwell Automation demonstrates fully virtual production lines', ko: '로크웰 오토메이션, 전체 가상 생산 라인 시뮬레이션 기술 공개' }, 
                            summary: { en: 'At Interpack 2026, Rockwell demonstrated a fully virtualized cookie production line using Emulate3D digital twin software, allowing for validation before physical installation.', ko: 'Interpack 2026에서 로크웰 오토메이션이 Emulate3D 디지털 트윈 소프트웨어를 사용하여 실제 설치 전 모든 공정을 가상으로 검증할 수 있는 전체 가상 생산 라인을 시연했습니다.' }, 
                            mainPoints: {
                                en: ['Using Emulate3D digital twin software for full virtualization', 'Allows validation of automation designs before physical commissioning', 'Demonstrated on high-speed cookie production and packaging lines'],
                                ko: ['Emulate3D 디지털 트윈 소프트웨어를 통한 생산 라인 전체 가상화', '실제 설비 도입 전 자동화 설계 및 로직의 완벽한 사전 검증 가능', '고속 제과 생산 및 포장 라인 시뮬레이션을 통해 효율성 증명']
                            },
                            source: 'PandCT',
                            url: 'https://pandct.com/news/rockwell-automation-virtual-production-interpack-2026',
                            date: '2026-05-06',
                            isVerified: true
                        },
                        { 
                            title: { en: 'Spirit AI and Bosch China partner for "Embodied Intelligence" in factories', ko: 'Spirit AI와 보쉬 중국, 공장용 "실체형 지능(Embodied Intelligence)" 도입 협력' }, 
                            summary: { en: 'Spirit AI and Bosch China have signed an agreement to deploy humanoid robots and autonomous agents in production logistics, using Bosch factories as data training grounds.', ko: 'Spirit AI와 보쉬 중국이 생산 물류 현장에 휴머노이드 로봇과 자율 에이전트를 배치하기 위한 전략적 협약을 체결했습니다. 보쉬 공장을 데이터 학습의 장으로 활용할 계획입니다.' }, 
                            mainPoints: {
                                en: ['Deploying humanoid robots in production logistics', 'Using Bosch factories for large-scale data acquisition', 'Developing a "general robot brain" for diverse industrial tasks'],
                                ko: ['생산 물류 분야에 휴머노이드 로봇 실제 배치 추진', '보쉬의 공장 인프라를 대규모 데이터 수집 및 학습 거점으로 활용', '다양한 산업 태스크 수행이 가능한 "범용 로봇 뇌" 개발 가속화']
                            },
                            source: 'Gasgoo',
                            url: 'https://gasgoo.com/news/spirit-ai-bosch-china-embodied-intelligence-partnership',
                            date: '2026-05-06',
                            isVerified: true
                        }
                    ]
                };
                resolve(briefing);
            }, 1000);
        });
    }
};
