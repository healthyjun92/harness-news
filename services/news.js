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
                            title: { en: 'Humanoid Robots Outrun Humans in Beijing Marathon', ko: '베이징 하프 마라톤에서 인간을 추월한 휴머노이드 로봇' }, 
                            summary: { en: 'Chinese brand HONOR\'s "Lightning" robot set a new half-marathon record of 50m 26s, surpassing elite human runners.', ko: '중국 HONOR사의 "라이트닝" 로봇이 하프 마라톤에서 50분 26초를 기록하며 엘리트 인간 선수들의 기록을 경신했습니다.' }, 
                            source: 'CBS News',
                            url: 'https://www.cbsnews.com/news/humanoid-robot-beats-human-half-marathon-world-record-beijing/',
                            date: today
                        },
                        { 
                            title: { en: 'Amazon Robotics Strategic Shift & Layoffs', ko: '아마존 로보틱스의 전략적 변화와 감원' }, 
                            summary: { en: 'Amazon confirmed layoffs and halted "Blue Jay" robotic arm project to focus on more modular fulfillment platforms.', ko: '아마존이 더 모듈화된 물류 플랫폼에 집중하기 위해 "Blue Jay" 로봇 팔 프로젝트를 중단하고 감원을 단행했습니다.' }, 
                            source: 'GeekWire',
                            url: 'https://www.geekwire.com/2026/amazon-is-laying-off-an-undisclosed-number-of-employees-from-its-robotics-division/',
                            date: today
                        }
                    ],
                    automotive: [
                        { 
                            title: { en: 'GM Indefinitely Delays Next-Gen EV Pickups', ko: 'GM, 차세대 전기 픽업트럭 출시 무기한 연기' }, 
                            summary: { en: 'General Motors is shifting focus back to ICE platforms and PHEV expansion due to market volatility.', ko: 'GM이 시장 변동성에 따라 차세대 전기 픽업 출시를 미루고 내연기관 및 하이브리드(PHEV) 확대로 선회했습니다.' }, 
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
                            title: { en: 'CATL Signs World\'s Largest Sodium-Ion Battery Deal', ko: 'CATL, 세계 최대 규모 나트륨 이온 배터리 계약 체결' }, 
                            summary: { en: 'CATL will provide 60GWh of sodium-ion batteries to HyperStrong, signaling a pivotal shift from lithium.', ko: 'CATL이 HyperStrong에 60GWh 규모의 나트륨 이온 배터리를 공급하기로 하며 리튬 대체 시장의 본격화를 알렸습니다.' }, 
                            source: 'Energy Storage News',
                            url: 'https://www.energy-storage.news/a-turning-point-catl-and-hyperstrong-sign-60gwh-sodium-ion-agreement/',
                            date: today
                        },
                        { 
                            title: { en: 'Long-Duration Energy Storage Forecast to Quadruple', ko: '장기 에너지 저장 시스템(LDES) 4배 성장 전망' }, 
                            summary: { en: 'Demand for grid-forming iron-air and vanadium batteries is surging to support AI data centers.', ko: 'AI 데이터 센터의 전력 수요를 뒷받침하기 위한 철-공기 및 바나듐 배터리 등 장기 저장 시스템 수요가 급증하고 있습니다.' }, 
                            source: 'BloombergNEF',
                            url: 'https://about.bnef.com/blog/global-energy-storage-market-to-grow-to-137gw-352gwh-by-2030/',
                            date: today
                        }
                    ],
                    wiring: [
                        { 
                            title: { en: 'Southwire Named Rockwell Automation Partner of the Year', ko: '사우스와이어, 로크웰 오토메이션 올해의 파트너 선정' }, 
                            summary: { en: 'Recognition for advanced VFD technology integration in greenfield industrial projects.', ko: '산업용 그린필드 프로젝트에서 첨단 VFD 기술을 성공적으로 통합한 공로를 인정받았습니다.' }, 
                            source: 'Southwire News',
                            url: 'https://www.southwire.com/newsroom/southwire-named-partner-of-the-year-by-rockwell-automation',
                            date: today
                        },
                        { 
                            title: { en: 'Breakthrough in Robotic Wire Insertion Automation', ko: '로봇 와이어 삽입 자동화 기술의 획기적 발전' }, 
                            summary: { en: 'Nissan and UT demonstrated a robotic system for wire insertion, a historically difficult manual task.', ko: '닛산과 테네시 대학이 그동안 자동화가 어려웠던 와이어 삽입 공정을 로봇 시스템으로 구현하는 데 성공했습니다.' }, 
                            source: 'Design News',
                            url: 'https://www.designnews.com/automation/robotic-wiring-harness-assembly-nissans-automation-breakthrough',
                            date: today
                        }
                    ],
                    automation: [
                        { 
                            title: { en: 'Global Wire Harness Market Reaches $96 Billion', ko: '글로벌 와이어링 하네스 시장 960억 달러 규모 달성' }, 
                            summary: { en: 'Growth driven by EV architectures and the adoption of halogen-free sustainable materials.', ko: '전기차 아키텍처 확산과 할로겐 프리 지속 가능 소재 채택에 힘입어 시장이 성장하고 있습니다.' }, 
                            source: 'Market Watch',
                            url: 'https://www.marketwatch.com/press-release/wire-harness-market-size-is-projected-to-reach-usd-131-4-billion-by-2030-at-a-cagr-of-5-2-valuates-reports-2023-06-13',
                            date: today
                        },
                        { 
                            title: { en: 'AI-Driven Digital Twin Integration in Manufacturing', ko: '제조업 내 AI 기반 디지털 트윈 통합 확산' }, 
                            summary: { en: 'Manufacturers use digital twins to validate harness layouts and EMC before physical production.', ko: '제조사들이 실제 생산 전 디지털 트윈을 통해 하네스 배치와 전자기 적합성을 검증하여 공기를 단축하고 있습니다.' }, 
                            source: 'Forbes Tech',
                            url: 'https://www.forbes.com/sites/bernardmarr/2024/02/06/the-top-5-industrial-automation-trends-for-2024/',
                            date: today
                        }
                    ]
                };
                resolve(briefing);
            }, 1000);
        });
    }
};
