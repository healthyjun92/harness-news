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
                            id: 'r1',
                            title: { en: 'Nvidia scales "Physical AI" through global robotics partnerships', ko: '엔비디아, 글로벌 로봇 파트너십을 통해 "물리적 AI" 생태계 대폭 확장' }, 
                            summary: { en: 'Nvidia announced a massive expansion of its robotics ecosystem, partnering with ABB, Agility, and Figure to deploy software that enables robots to perceive and reason in complex factory environments.', ko: '엔비디아가 ABB, Agility, Figure 등 주요 기업들과 파트너십을 맺고 공장 등 복잡한 환경에서 로봇이 스스로 인지하고 추론할 수 있도록 돕는 "물리적 AI" 소프트웨어 생태계를 확장한다고 발표했습니다.' }, 
                            content: {
                                en: `Nvidia has significantly scaled its efforts in the realm of "Physical AI" by announcing comprehensive global partnerships with major robotics manufacturers, including ABB, Agility Robotics, and Figure. This move marks a pivotal shift from traditional, rigid programming to highly adaptive, AI-driven automation in industrial settings.
                                
                                The core of this initiative revolves around Nvidia's new software stack, which empowers robots to perceive their surroundings in real-time, reason about complex tasks, and execute actions with unprecedented precision. Unlike older systems that required meticulous hard-coding for every specific movement, Physical AI allows robots to understand the physical laws of their environment, adapt to unexpected changes, and learn from human demonstrations.
                                
                                Industry analysts suggest that this breakthrough will drastically reduce the deployment time for automated systems in factories. "What used to take months of programming can now be achieved in days through AI training," stated a lead robotics researcher. The integration of Nvidia's powerful GPUs and AI models into factory floors is expected to revolutionize supply chains, enhancing both speed and safety while mitigating labor shortages in critical manufacturing sectors.`,
                                ko: `엔비디아가 ABB, Agility Robotics, Figure 등 주요 로봇 제조사들과의 포괄적인 글로벌 파트너십을 발표하며 "물리적 AI(Physical AI)" 분야에서의 입지를 대폭 확대했습니다. 이번 조치는 산업 현장의 자동화가 기존의 경직된 프로그래밍 방식에서 고도로 적응력이 뛰어난 AI 주도 방식으로 전환되는 중요한 기점이 될 것입니다.
                                
                                이 이니셔티브의 핵심은 로봇이 실시간으로 주변 환경을 인식하고, 복잡한 작업을 추론하며, 전례 없는 정밀도로 동작을 실행할 수 있도록 지원하는 엔비디아의 새로운 소프트웨어 스택입니다. 모든 특정 움직임에 대해 세심한 하드코딩이 필요했던 과거의 시스템과 달리, 물리적 AI는 로봇이 환경의 물리적 법칙을 이해하고, 예상치 못한 변화에 적응하며, 인간의 시연을 통해 스스로 학습할 수 있도록 합니다.
                                
                                업계 전문가들은 이번 기술 혁신이 공장 내 자동화 시스템의 도입 시간을 획기적으로 단축할 것이라고 전망합니다. 한 수석 로봇 연구원은 "과거에는 수개월이 걸렸던 프로그래밍 작업이 이제 AI 학습을 통해 단 며칠 만에 가능해졌습니다"라고 말했습니다. 엔비디아의 강력한 GPU와 AI 모델이 제조 현장에 본격적으로 통합됨에 따라 공급망이 혁신되고, 작업 속도와 안전성이 향상되는 동시에 핵심 제조업 분야의 노동력 부족 문제가 완화될 것으로 기대됩니다.`
                            },
                            author: 'Harness News Team',
                            date: '2026-05-06',
                            readTime: 4
                        },
                        { 
                            id: 'r2',
                            title: { en: 'Ukraine to procure 25,000 UGVs in 2026 for frontline logistics', ko: '우크라이나, 2026년 최전방 보급을 위해 지상 무인 로봇(UGV) 25,000대 도입' }, 
                            summary: { en: 'Ukraine has set a goal to procure 25,000 unmanned ground vehicles (UGVs) by late 2026 to replace human personnel in dangerous frontline logistics and mine clearance roles.', ko: '우크라이나가 2026년 말까지 25,000대의 지상 무인 로봇(UGV)을 도입하여, 위험한 최전방 물자 보급 및 지뢰 제거 임무에서 인력을 대체하겠다는 계획을 수립했습니다.' }, 
                            content: {
                                en: `In a major modernization of its military logistics capabilities, Ukraine has announced an ambitious target to procure 25,000 Unmanned Ground Vehicles (UGVs) by the end of 2026. This initiative is designed to dramatically reduce human casualties by replacing personnel in highly dangerous frontline roles, specifically in logistics resupply and mine clearance operations.
                                
                                The deployment of these UGVs represents a critical shift toward asymmetric and technologically advanced warfare. These vehicles, ranging from small tracked robots capable of carrying medical supplies and ammunition to larger, heavily armored units designed for explosive ordnance disposal (EOD), are expected to operate autonomously or semi-autonomously in heavily contested zones.
                                
                                Defense officials emphasize that the mass adoption of UGVs will provide a vital tactical advantage. By ensuring a continuous, unmanned supply line to frontline troops and safely neutralizing minefields ahead of troop movements, the military aims to sustain momentum while preserving human life. The procurement will involve a mix of domestic production and strategic imports from allied nations, stimulating growth in the global defense robotics sector.`,
                                ko: `우크라이나가 2026년 말까지 25,000대의 지상 무인 로봇(UGV)을 도입한다는 야심 찬 목표를 발표하며 군수 보급 역량의 대대적인 현대화에 나섰습니다. 이 이니셔티브는 최전방의 고위험 임무, 특히 물자 보급 및 지뢰 제거 작전에서 인력을 대체함으로써 인명 피해를 획기적으로 줄이기 위해 마련되었습니다.
                                
                                이러한 UGV의 대규모 배치는 비대칭적이고 기술 중심적인 현대전으로의 중요한 전환을 의미합니다. 의료품과 탄약을 운반할 수 있는 소형 궤도형 로봇부터 폭발물 처리(EOD)를 위해 특수 설계된 대형 장갑 무인기까지 다양한 형태의 UGV가 치열한 접전 지역에서 자율 또는 반자율 모드로 운용될 예정입니다.
                                
                                국방 관계자들은 UGV의 대량 도입이 핵심적인 전술적 우위를 제공할 것이라고 강조합니다. 최전방 부대에 무인 보급선을 안정적으로 유지하고, 병력 이동 전 지뢰밭을 안전하게 무력화함으로써 군은 인명 손실을 방지하는 동시에 작전의 주도권을 유지할 수 있습니다. 이번 조달은 우크라이나 국내 생산과 동맹국의 전략적 수입을 병행하여 이루어질 예정이며, 이는 글로벌 국방 로봇 산업의 성장도 촉진할 전망입니다.`
                            },
                            author: 'Defense Tech Editor',
                            date: '2026-05-06',
                            readTime: 3
                        }
                    ],
                    automotive: [
                        { 
                            id: 'a1',
                            title: { en: 'BMW releases pricing for 2027 iX3 with 434-mile range', ko: 'BMW, 434마일 주행거리 갖춘 2027년형 iX3 가격 및 상세 스펙 공개' }, 
                            summary: { en: 'BMW has released full pricing for the new iX3 50 xDrive, starting at $62,850 and offering an EPA-estimated range of 434 miles, outperforming several key rivals.', ko: 'BMW가 차세대 iX3 50 xDrive의 가격을 62,850달러부터 시작한다고 발표했습니다. EPA 기준 434마일(약 698km)의 주행거리를 제공하여 동급 경쟁 모델들을 압도하고 있습니다.' }, 
                            content: {
                                en: `BMW has officially unveiled the pricing and specifications for its highly anticipated 2027 iX3 50 xDrive, setting a new benchmark in the luxury electric SUV segment. Starting at $62,850, the latest iteration of the iX3 boasts an impressive EPA-estimated range of 434 miles on a single charge, a figure that places it comfortably ahead of direct competitors like the Porsche Macan EV and the Cadillac Optiq.
                                
                                This exceptional range is achieved through BMW's latest generation of high-density battery cells and significant advancements in aerodynamic design. The vehicle's intelligent thermal management system also ensures consistent performance and efficiency even in extreme weather conditions. Inside, the iX3 features BMW's newest iDrive interface, integrated deeply with augmented reality navigation and advanced driver-assistance systems.
                                
                                The aggressive pricing strategy combined with class-leading range signals BMW's intent to dominate the premium EV market. Industry analysts note that overcoming "range anxiety" has been a primary hurdle for EV adoption among luxury buyers, and the 2027 iX3 directly addresses this concern, potentially triggering a new wave of electric vehicle upgrades among affluent consumers.`,
                                ko: `BMW가 럭셔리 전기 SUV 부문의 새로운 기준을 제시할 2027년형 iX3 50 xDrive의 가격과 상세 스펙을 공식 발표했습니다. 62,850달러부터 시작하는 이 최신 모델은 EPA 기준 434마일(약 698km)이라는 놀라운 1회 충전 주행거리를 자랑하며, 포르쉐 마칸 EV나 캐딜락 옵틱과 같은 직접적인 경쟁 모델들을 여유 있게 따돌리고 있습니다.
                                
                                이러한 획기적인 주행거리 연장은 BMW의 최신 고밀도 배터리 셀 기술과 공기역학적 디자인의 눈부신 발전 덕분에 가능했습니다. 또한 지능형 열 관리 시스템을 도입하여 극한의 기상 조건에서도 일관된 성능과 효율성을 유지합니다. 실내에는 증강 현실(AR) 내비게이션 및 첨단 운전자 보조 시스템과 긴밀하게 통합된 BMW의 최신 iDrive 인터페이스가 적용되었습니다.
                                
                                동급 최고 수준의 주행거리와 공격적인 가격 책정은 프리미엄 전기차 시장을 주도하겠다는 BMW의 강력한 의지를 보여줍니다. 업계 전문가들은 고급차 구매자들 사이에서 전기차 전환을 망설이게 하는 주된 원인이 '주행거리 불안'이었으며, 2027년형 iX3가 이 문제를 정면으로 해결함으로써 고소득 소비층의 새로운 전기차 구매 돌풍을 일으킬 수 있다고 평가하고 있습니다.`
                            },
                            author: 'Auto Industry Analyst',
                            date: '2026-05-06',
                            readTime: 4
                        }
                    ]
                };
                resolve(briefing);
            }, 1000);
        });
    }
};