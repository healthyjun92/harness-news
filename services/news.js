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
                            title: { en: 'Serve Robotics Reports 238% Revenue Growth and Expands Operations', ko: 'Serve Robotics, 매출 238% 성장 및 운영 지역 대폭 확대' }, 
                            summary: { en: 'Serve Robotics reported a 238% sequential revenue growth in Q1 2026, expanding its operations to 44 cities following the Diligent Robotics acquisition.', ko: 'Serve Robotics는 2026년 1분기에 전 분기 대비 238%의 매출 성장을 기록했으며, 딜리전트 로보틱스 인수 후 운영을 44개 도시로 확장했습니다.' }, 
                            content: {
                                en: `Serve Robotics (Nasdaq: SERV) has announced significant financial and operational milestones for the first quarter of 2026, reporting a staggering 238% sequential revenue growth. This rapid expansion is primarily driven by the successful integration of its recent acquisition, Diligent Robotics, which has allowed Serve to diversify its portfolio beyond outdoor sidewalk delivery.
                                
                                The company has aggressively expanded into the indoor service sector, specifically targeting hospital environments. Serve's robotic fleet is now actively operating in 44 cities across 14 states in the U.S., assisting medical staff with logistics and supply transport. This strategic pivot addresses acute labor shortages in the healthcare sector, providing autonomous solutions that allow human workers to focus on patient care.
                                
                                Industry experts view Serve's trajectory as a strong indicator of the maturation of the robotics-as-a-service (RaaS) model. By demonstrating clear ROI in both outdoor and indoor commercial applications, the company is proving that autonomous delivery systems can scale profitably when tailored to specific, high-demand verticals.`,
                                ko: `서브 로보틱스(Serve Robotics, 나스닥: SERV)가 2026년 1분기에 전 분기 대비 238%라는 놀라운 매출 성장을 기록하며 중요한 재무 및 운영 이정표를 달성했다고 발표했습니다. 이러한 급격한 성장은 최근 인수한 딜리전트 로보틱스(Diligent Robotics)의 성공적인 통합에 힘입은 것으로, 이를 통해 서브 로보틱스는 실외 인도 배달을 넘어 포트폴리오를 다각화할 수 있었습니다.
                                
                                회사는 실내 서비스 부문, 특히 병원 환경을 타겟으로 공격적인 확장을 진행해 왔습니다. 서브 로보틱스의 로봇 자율주행 제품군은 현재 미국 내 14개 주, 44개 도시에서 활발히 운영되며 의료진의 물류 및 물품 운송을 지원하고 있습니다. 이러한 전략적 전환은 의료 부문의 심각한 인력 부족 문제를 해결하고, 인간 작업자가 환자 치료에 집중할 수 있도록 자율 솔루션을 제공합니다.
                                
                                업계 전문가들은 서브 로보틱스의 이러한 성장 궤적을 로봇 서비스(RaaS) 모델이 성숙기에 접어들었다는 강력한 지표로 보고 있습니다. 실외 및 실내 상업용 애플리케이션 모두에서 명확한 투자 수익률(ROI)을 입증함으로써, 회사는 수요가 높은 특정 수직 시장에 맞춤화될 때 자율 배송 시스템이 수익성 있게 확장될 수 있음을 증명하고 있습니다.`
                            },
                            author: 'Serve Robotics Newsroom',
                            date: '2026-05-08',
                            readTime: 3,
                            source: 'serverobotics.com',
                            url: 'https://investors.serverobotics.com/news-releases'
                        },
                        { 
                            id: 'r2',
                            title: { en: 'HD Hyundai Robotics Secures Major Order from Chouest Group Shipyards', ko: 'HD현대로보틱스, 미국 Chouest 조선소로부터 대규모 수주 확보' }, 
                            summary: { en: 'HD Hyundai Robotics announced a full-scale entry into the U.S. shipyard market by securing a major order for its ArcLift GO robotic welding solution.', ko: 'HD현대로보틱스는 자사의 용접 로봇 솔루션인 ArcLift GO의 대규모 수주를 확보하며 미국 조선소 시장에 본격 진출한다고 발표했습니다.' }, 
                            content: {
                                en: `In a landmark move for heavy industry automation, HD Hyundai Robotics has secured a major strategic order from the U.S.-based Chouest Group Shipyards. The contract centers around the deployment of HD Hyundai's proprietary "ArcLift GO" robotic welding solution, marking the company's full-scale entry into the North American shipbuilding market.
                                
                                The U.S. shipbuilding sector has been grappling with severe shortages of skilled labor, particularly certified welders, causing bottlenecks in production schedules. The ArcLift GO system is designed to autonomously navigate complex ship hull structures, performing high-precision welding tasks that previously required extensive human labor. The integration of these robots is expected to drastically increase output efficiency while maintaining rigorous maritime safety standards.
                                
                                This deal is seen as a crucial step for the robotics industry's expansion into non-traditional, heavy-duty manufacturing environments. Financial analysts note that as the global maritime industry seeks to modernize and expand capacity, the demand for specialized, ruggedized industrial robotics will create a lucrative new revenue stream for established robotics manufacturers over the next decade.`,
                                ko: `중공업 자동화 분야의 기념비적인 행보로, HD현대로보틱스가 미국 기반의 Chouest Group 조선소로부터 주요 전략적 수주를 확보했습니다. 이번 계약은 HD현대의 독자적인 용접 로봇 솔루션인 "ArcLift GO"의 도입을 중심으로 이루어졌으며, 이는 북미 조선 시장에 대한 회사의 본격적인 진출을 의미합니다.
                                
                                미국 조선업계는 숙련된 인력, 특히 인증된 용접공의 심각한 부족으로 인해 생산 일정에 병목 현상을 겪고 있습니다. ArcLift GO 시스템은 복잡한 선체 구조를 자율적으로 탐색하도록 설계되어, 과거에는 광범위한 인간의 노동이 필요했던 고정밀 용접 작업을 수행합니다. 이러한 로봇의 통합은 엄격한 해사 안전 기준을 유지하면서 생산 효율성을 획기적으로 높일 것으로 기대됩니다.
                                
                                이번 거래는 로봇 산업이 비전통적인 중장비 제조 환경으로 영역을 확장하는 중요한 단계로 평가받고 있습니다. 재무 분석가들은 전 세계 해양 산업이 현대화되고 생산 능력을 확대하고자 함에 따라, 특수화되고 내구성이 뛰어난 산업용 로봇에 대한 수요가 향후 10년 동안 기존 로봇 제조업체들에게 새롭고 수익성 높은 수익원을 창출할 것이라고 주목합니다.`
                            },
                            author: 'Morningstar Equities',
                            date: '2026-05-07',
                            readTime: 4,
                            source: 'morningstar.com',
                            url: 'https://www.morningstar.com/news/'
                        }
                    ],
                    automotive: [
                        { 
                            id: 'a1',
                            title: { en: '2026 Honda Prologue Features Expanded Access to Tesla Supercharger Network', ko: '2026년형 혼다 프롤로그, 테슬라 수퍼차저 네트워크 접근성 대폭 확대' }, 
                            summary: { en: 'The 2026 Honda Prologue EV has been updated to include native support for the North American Charging Standard (NACS), providing access to the Tesla Supercharger network.', ko: '2026년형 혼다 프롤로그 EV는 북미 충전 표준(NACS)을 기본 지원하도록 업데이트되어 테슬라 수퍼차저 네트워크를 이용할 수 있게 되었습니다.' }, 
                            content: {
                                en: `Honda has officially announced that the upcoming 2026 model year of the Prologue electric vehicle will feature native integration of the North American Charging Standard (NACS) port. This critical update grants Honda drivers seamless, direct access to the vast Tesla Supercharger network without the need for cumbersome adapters, significantly alleviating range anxiety for consumers.
                                
                                The decision reflects a broader industry consensus that charging infrastructure reliability is the primary hurdle to mainstream EV adoption. By aligning with the NACS standard, Honda ensures that Prologue owners can utilize over 15,000 high-speed chargers across the United States and Canada. This move is expected to bolster the Prologue's competitiveness in the crowded mid-size electric SUV market.
                                
                                Automotive analysts view 2026 as the tipping point where charging hardware standardization finally becomes a reality. "Consumers no longer want to worry about connector compatibility when planning a road trip," a leading industry analyst stated. The 2026 Prologue also features slight aerodynamic tweaks and a revised battery management system, marginally improving its EPA-estimated range over previous iterations.`,
                                ko: `혼다가 다가오는 2026년형 프롤로그(Prologue) 전기차 모델에 북미 충전 표준(NACS) 포트를 기본으로 통합할 것이라고 공식 발표했습니다. 이 중요한 업데이트를 통해 혼다 운전자들은 번거로운 어댑터 없이도 방대한 테슬라 수퍼차저 네트워크에 원활하고 직접적으로 접근할 수 있게 되어, 소비자의 주행거리 불안을 크게 완화할 수 있게 되었습니다.
                                
                                이러한 결정은 충전 인프라의 신뢰성이 전기차 대중화의 가장 큰 장애물이라는 업계 전반의 공감대를 반영한 것입니다. 혼다는 NACS 표준을 채택함으로써 프롤로그 소유자가 미국과 캐나다 전역에 걸쳐 15,000개 이상의 고속 충전기를 이용할 수 있도록 보장합니다. 이번 조치는 경쟁이 치열한 중형 전기 SUV 시장에서 프롤로그의 경쟁력을 강화할 것으로 예상됩니다.
                                
                                자동차 분석가들은 2026년을 충전 하드웨어 표준화가 마침내 현실이 되는 티핑 포인트로 보고 있습니다. 한 주요 업계 분석가는 "소비자들은 더 이상 장거리 여행을 계획할 때 커넥터 호환성에 대해 걱정하고 싶어하지 않습니다"라고 말했습니다. 2026년형 프롤로그는 약간의 공기역학적 개선과 수정된 배터리 관리 시스템을 특징으로 하며, 이전 모델에 비해 EPA 추정 주행거리를 소폭 향상시켰습니다.`
                            },
                            author: 'Honda Newsroom',
                            date: '2026-05-08',
                            readTime: 3,
                            source: 'hondanews.com',
                            url: 'https://hondanews.com/en-US/'
                        }
                    ]
                };
                resolve(briefing);
            }, 1000);
        });
    }
};