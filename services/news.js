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
                            title: { en: 'Humanoid robot beats human half-marathon world record in Beijing', ko: '베이징 하프 마라톤에서 인간 세계 기록을 경신한 휴머노이드 로봇' }, 
                            summary: { en: 'Chinese brand HONOR\'s "Lightning" robot set a new half-marathon record of 50m 26s, significantly faster than the human world record.', ko: '중국 HONOR사의 "라이트닝" 로봇이 하프 마라톤에서 50분 26초를 기록하며 기존 인간 세계 기록(57분 20초)을 6분 이상 앞당겼습니다.' }, 
                            source: 'CBS News',
                            url: 'https://www.cbsnews.com/news/humanoid-robot-beats-human-half-marathon-world-record-beijing/#:~:text=50%20minutes%20and%2026%20seconds',
                            date: today
                        },
                        { 
                            title: { en: 'Amazon cuts at least 100 jobs in robotics division, halts Blue Jay project', ko: '아마존 로보틱스 부문 100명 이상 감원 및 블루제이 프로젝트 중단' }, 
                            summary: { en: 'Amazon confirmed layoffs within its robotics division and the cancellation of the "Blue Jay" sortation robot to focus on more modular systems.', ko: '아마존이 로보틱스 부문에서 최소 100명의 화이트칼라 인력을 감축하고, 공간 효율성을 위해 개발 중이던 천장형 로봇 팔 "블루제이" 프로젝트를 중단했습니다.' }, 
                            source: 'CTV News (Reuters)',
                            url: 'https://www.ctvnews.ca/business/amazon-cuts-at-least-100-jobs-in-robotics-division-1.6794544',
                            date: today
                        }
                    ],
                    automotive: [
                        { 
                            title: { en: 'GM Delays Next-Gen Full-Size EV Trucks and SUVs Indefinitely', ko: 'GM, 차세대 대형 전기 트럭 및 SUV 출시 무기한 연기' }, 
                            summary: { en: 'General Motors has suspended its next-gen EV truck program, originally slated for 2028, to focus on gas-powered platforms and hybrids.', ko: 'GM이 시장 변동성에 대응하기 위해 2028년 출시 예정이었던 차세대 전기 픽업트럭 및 SUV 개발을 중단하고, 내연기관(ICE) 및 하이브리드 투자를 확대하기로 했습니다.' }, 
                            source: 'Car and Driver',
                            url: 'https://www.caranddriver.com/news/a60568444/gm-next-gen-full-size-ev-trucks-delayed/',
                            date: today
                        },
                        { 
                            title: { en: 'BMW Unveils Durable Color-Changing E Ink Tech', ko: 'BMW, 내구성이 강화된 색상 변경 E-Ink 기술 공개' }, 
                            summary: { en: 'The iX3 Flow Edition features E Ink Prism technology embedded directly into the hood structure for mass production.', ko: 'BMW가 보닛 구조에 직접 E-Ink를 내장하여 양산에 가까워진 iX3 Flow 에디션을 베이징 오토쇼에서 선보였습니다.' }, 
                            source: 'The Verge',
                            url: 'https://www.theverge.com/2022/1/5/22867090/bmw-color-changing-car-ces-2022-e-ink',
                            date: today
                        }
                    ],
                    battery: [
                        { 
                            title: { en: 'CATL and HyperStrong sign 60GWh sodium-ion agreement', ko: 'CATL-HyperStrong, 60GWh 규모 세계 최대 나트륨 이온 배터리 계약' }, 
                            summary: { en: 'CATL secured a massive 60GWh order for sodium-ion batteries, signaling a major industry shift toward lithium-free storage technologies.', ko: 'CATL이 HyperStrong과 60GWh 규모의 공급 계약을 체결했습니다. 이는 세계 최대 규모의 나트륨 이온 배터리 주문으로, 리튬 대체 시장의 본격화를 의미합니다.' }, 
                            source: 'Energy Storage News',
                            url: 'https://www.energy-storage.news/a-turning-point-catl-and-hyperstrong-sign-60gwh-sodium-ion-agreement/',
                            date: today
                        },
                        { 
                            title: { en: 'Global energy storage market to grow to 137GW/352GWh by 2030', ko: '글로벌 에너지 저장 시장, 2030년까지 137GW 규모로 성장 전망' }, 
                            summary: { en: 'The global energy storage market is set to quadruple by 2030, driven by AI data centers and renewable integration.', ko: 'AI 데이터 센터의 급증하는 전력 수요와 신재생 에너지 통합을 위해 글로벌 에너지 저장 장치(ESS) 시장이 2030년까지 현재의 4배 수준으로 성장할 것으로 전망됩니다.' }, 
                            source: 'BloombergNEF',
                            url: 'https://about.bnef.com/blog/global-energy-storage-market-to-grow-to-137gw-352gwh-by-2030/',
                            date: today
                        }
                    ],
                    wiring: [
                        { 
                            title: { en: 'Automotive Wire Harness Market Size to Reach $72.99 Billion in 2026', ko: '2026년 글로벌 자동차 와이어링 하네스 시장 729억 달러 도달 전망' }, 
                            summary: { en: 'Market growth is driven by EV architecture complexity and the demand for high-speed data transmission for ADAS.', ko: '전기차(EV) 아키텍처의 복잡성 증가와 자율주행(ADAS)을 위한 고속 데이터 전송 수요에 힘입어 2026년 하네스 시장이 729억 달러 규모로 성장할 것으로 분석되었습니다.' }, 
                            source: 'The Business Research Company',
                            url: 'https://www.thebusinessresearchcompany.com/report/automotive-wire-harness-global-market-report#:~:text=72.99%20billion%20in%202026',
                            date: today
                        },
                        { 
                            title: { en: 'Robotic Wiring Harness Assembly: Nissan\'s Automation Breakthrough', ko: '닛산, 로봇 와이어링 하네스 조립 자동화 기술 돌파구 마련' }, 
                            summary: { en: 'Nissan demonstrated a robotic system capable of inserting delicate 1.6mm wires into connectors without complex sensors.', ko: '닛산이 그동안 수작업에 의존하던 와이어 삽입 공정을 로봇으로 자동화하는 데 성공했습니다. 복잡한 센서 없이도 1.6mm의 미세한 와이어를 커넥터에 정확히 삽입할 수 있는 기술입니다.' }, 
                            source: 'Design News',
                            url: 'https://www.designnews.com/automation/robotic-wiring-harness-assembly-nissans-automation-breakthrough',
                            date: today
                        }
                    ],
                    automation: [
                        { 
                            title: { en: 'Intel and FPT collaborate to advance AI-driven autonomous factories', ko: '인텔-FPT, AI 기반 자율 공장 고도화를 위한 전략적 협력' }, 
                            summary: { en: 'The partnership integrates digital twin technology with AI to optimize material flows and resolve production bottlenecks in real-time.', ko: '인텔과 FPT가 협력하여 디지털 트윈과 AI를 결합한 공장 최적화 솔루션을 개발합니다. 실시간 병목 현상 감지 및 자율적인 물류 관리를 통해 생산 효율을 극대화합니다.' }, 
                            source: 'CRN Asia',
                            url: 'https://www.crn.asia/news/intel-and-fpt-collaborate-to-advance-ai-driven-autonomous-factories-202604',
                            date: today
                        },
                        { 
                            title: { en: 'Siemens and NVIDIA expand partnership for Industrial Metaverse', ko: '지멘스-엔비디아, 산업용 메타버스 구현을 위한 파트너십 확대' }, 
                            summary: { en: 'The launch of Digital Twin Composer enables AI agents to perform autonomous root-cause analysis in factory simulations.', ko: '지멘스가 엔비디아와 협력하여 디지털 트윈 컴포저를 출시했습니다. AI 에이전트가 가상 공장 시뮬레이션에서 스스로 문제 원인을 분석하고 최적화하는 산업용 메타버스 시대가 열리고 있습니다.' }, 
                            source: 'Siemens News',
                            url: 'https://www.siemens.com/global/en/company/stories/industry/2024/siemens-nvidia-generative-ai-visualization-digital-twin.html',
                            date: today
                        }
                    ]
                };
                resolve(briefing);
            }, 1000);
        });
    }
};
