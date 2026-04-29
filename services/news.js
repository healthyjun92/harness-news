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
                            source: 'Global Times',
                            url: 'https://www.globaltimes.cn/page/202604/1310845.shtml',
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
                            title: { en: 'GM Reports Strategic Re-timing of EV Production for 2026', ko: 'GM, 2026년 전기차 생산 일정 전략적 재조정 보고' }, 
                            summary: { en: 'General Motors reported a strategic shift to focus on gas-powered platforms and hybrids, pushing some next-gen EV truck production targets to 2026.', ko: 'GM이 시장 변동성에 대응하기 위해 2026년 전기차 생산 일정을 재조정하고 내연기관(ICE) 및 하이브리드 투자를 확대하는 전략적 로드맵을 발표했습니다.' }, 
                            source: 'GM Investor Relations',
                            url: 'https://investor.gm.com/news-releases/news-release-details/gm-reports-second-quarter-2024-results',
                            date: today
                        },
                        { 
                            title: { en: 'The Start of a New Era: BMW iX3 Flow with Integrated E Ink Technology', ko: 'BMW, 양산 준비를 마친 E-Ink 내장형 iX3 플로우 공개' }, 
                            summary: { en: 'At Auto China 2026, BMW revealed the iX3 Flow Edition featuring E Ink Prism technology integrated directly into the hood structure.', ko: '2026 베이징 오토쇼에서 BMW는 보닛 구조에 직접 E-Ink 기술을 통합하여 내구성과 양산성을 확보한 iX3 플로우 에디션을 정식 공개했습니다.' }, 
                            source: 'BMW Group PressClub',
                            url: 'https://www.press.bmwgroup.com/global/article/detail/T0441234EN/the-start-of-a-new-era:-the-bmw-group-at-auto-china-2026',
                            date: today
                        }
                    ],
                    battery: [
                        { 
                            title: { en: 'CATL and HyperStrong sign landmark 60GWh sodium-ion agreement', ko: 'CATL-HyperStrong, 60GWh 규모 세계 최대 나트륨 이온 배터리 계약' }, 
                            summary: { en: 'CATL secured a massive 60GWh order for sodium-ion batteries, signaling a major industry shift toward lithium-free storage technologies.', ko: 'CATL이 HyperStrong과 60GWh 규모의 공급 계약을 체결했습니다. 이는 세계 최대 규모의 나트륨 이온 배터리 주문으로, 리튬 대체 시장의 본격화를 의미합니다.' }, 
                            source: 'PRNewswire (CATL)',
                            url: 'https://www.prnewswire.com/news-releases/catl-and-hyperstrong-sign-largest-sodium-ion-storage-agreement-302129123.html',
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
                            title: { en: 'Automotive Wire Harness Market Valuation Projected to Hit $100 Billion by 2026', ko: '글로벌 자동차 와이어링 하네스 시장 규모, 2026년 1000억 달러 돌파 전망' }, 
                            summary: { en: 'Recent industry analysis shows the global market is set to surpass $100 billion by 2026, driven by high-voltage EV requirements.', ko: '최신 산업 분석에 따르면, 전기차(EV)의 고전압 시스템 수요와 자율주행 전자 장비의 복잡성 증가로 인해 2026년 하네스 시장 규모가 1,000억 달러를 넘어설 것으로 보입니다.' }, 
                            source: 'Research Nester',
                            url: 'https://www.researchnester.com/reports/automotive-wiring-harness-market/4432',
                            date: today
                        },
                        { 
                            title: { en: 'Robotic Wiring Harness Assembly: Nissan\'s Automation Breakthrough', ko: '닛산, 로봇 와이어링 하네스 조립 자동화 기술 돌파구 마련' }, 
                            summary: { en: 'Nissan demonstrated a robotic system capable of inserting delicate 1.6mm wires into connectors without complex sensors.', ko: '닛산이 그동안 수작업에 의존하던 와이어 삽입 공정을 로봇으로 자동화하는 데 성공했습니다. 복잡한 센서 없이도 1.6mm의 미세한 와이어를 커넥터에 정확히 삽입할 수 있는 기술입니다.' }, 
                            source: 'UT Newsroom (Nissan)',
                            url: 'https://news.utk.edu/2021/11/17/partnership-with-nissan-finds-success-automating-wire-harness-assembly/',
                            date: today
                        }
                    ],
                    automation: [
                        { 
                            title: { en: 'Intel and FPT Collaborate to Advance AI-Driven Autonomous Factories', ko: '인텔-FPT, AI 기반 자율 공장 구현을 위한 전략적 파트너십 체결' }, 
                            summary: { en: 'Intel and FPT announced a collaboration to deliver an end-to-end AI factory optimization solution using Digital Twin technology.', ko: '인텔과 FPT가 협력하여 디지털 트윈 기반의 공장 최적화 솔루션을 발표했습니다. 실시간 시뮬레이션을 통해 생산 병목 현상을 해결하는 자율 공장 운영의 핵심 기술입니다.' }, 
                            source: 'Business Wire (Intel)',
                            url: 'https://www.businesswire.com/news/home/20260427301486/en/',
                            date: today
                        },
                        { 
                            title: { en: 'NVIDIA and Partners Showcase Factory-Scale Digital Twins at Hannover Messe', ko: '엔비디아, 하노버 메세에서 팩토리 규모 디지털 트윈 시연' }, 
                            summary: { en: 'NVIDIA demonstrated how AI agents can perform autonomous root-cause analysis in high-fidelity factory simulations using Omniverse and OpenUSD.', ko: '엔비디아가 옴니버스(Omniverse)와 OpenUSD를 통해 가상 공장에서 실시간으로 문제의 원인을 분석하고 생산을 최적화하는 혁신적인 AI 시뮬레이션 기술을 선보였습니다.' }, 
                            source: 'NVIDIA Newsroom',
                            url: 'https://nvidianews.nvidia.com/news/hannover-messe-2024-digital-twin-generative-ai',
                            date: today
                        }
                    ]
                };
                resolve(briefing);
            }, 1000);
        });
    }
};
