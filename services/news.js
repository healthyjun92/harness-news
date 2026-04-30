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
                            title: { en: 'Amazon expands robotics investment with new fulfillment technology', ko: '아마존, 신규 물류 기술 도입으로 로보틱스 투자 확대' }, 
                            summary: { en: 'Amazon continues to lead the industry by deploying advanced robotic systems like Sequoia to enhance safety and efficiency in fulfillment centers.', ko: '아마존이 세쿼이아(Sequoia)와 같은 첨단 로봇 시스템을 물류 센터에 구축하여 안전성과 효율성을 높이며 산업계를 선도하고 있습니다.' }, 
                            source: 'Amazon News',
                            url: 'https://www.aboutamazon.com/news/operations/amazon-robotics-fulfillment-center-technology',
                            date: today
                        },
                        { 
                            title: { en: 'Boston Dynamics introduces All-Electric Atlas humanoid robot', ko: '보스턴 다이내믹스, 올-일렉트릭 아틀라스 휴머노이드 공개' }, 
                            summary: { en: 'Boston Dynamics has unveiled an entirely new, fully electric Atlas robot designed for real-world applications, moving beyond the hydraulic version.', ko: '보스턴 다이내믹스가 기존 유압식을 넘어 실제 산업 현장 적용을 위해 설계된 완전 전동식 아틀라스 로봇을 새롭게 공개했습니다.' }, 
                            source: 'Boston Dynamics',
                            url: 'https://bostondynamics.com/blog/electric-atlas/',
                            date: today
                        }
                    ],
                    automotive: [
                        { 
                            title: { en: 'GM Reports Strategic Re-timing of EV Production', ko: 'GM, 전기차 생산 일정 전략적 재조정 보고' }, 
                            summary: { en: 'General Motors reported a strategic shift to focus on a balanced portfolio of ICE and EV platforms to meet evolving market demand.', ko: 'GM이 변화하는 시장 수요에 대응하기 위해 내연기관(ICE) 및 전기차(EV) 플랫폼의 균형 잡힌 포트폴리오에 집중하는 전략적 변화를 발표했습니다.' }, 
                            source: 'GM Investor Relations',
                            url: 'https://investor.gm.com/news-releases/news-release-details/gm-reports-second-quarter-2024-results',
                            date: today
                        },
                        { 
                            title: { en: 'The Start of a New Era: BMW iX3 Flow with Integrated E Ink Technology', ko: 'BMW, E-Ink 기술이 통합된 iX3 플로우 공개' }, 
                            summary: { en: 'BMW revealed the iX3 Flow featuring E Ink technology, allowing the vehicle to change its exterior color at the touch of a button.', ko: 'BMW는 버튼 하나로 차량의 외장 색상을 변경할 수 있는 E-Ink 기술이 적용된 iX3 플로우를 공개했습니다.' }, 
                            source: 'BMW Group PressClub',
                            url: 'https://www.press.bmwgroup.com/global/article/detail/T0364491EN/the-start-of-a-new-era:-the-bmw-group-at-auto-china-2024',
                            date: today
                        }
                    ],
                    battery: [
                        { 
                            title: { en: 'CATL and HyperStrong sign landmark energy storage agreement', ko: 'CATL-HyperStrong, 랜드마크 에너지 저장 협약 체결' }, 
                            summary: { en: 'CATL and HyperStrong signed a major cooperation agreement to promote the development of large-scale energy storage solutions globally.', ko: 'CATL과 HyperStrong이 글로벌 대규모 에너지 저장 솔루션 개발을 촉진하기 위한 주요 협력 협약을 체결했습니다.' }, 
                            source: 'PRNewswire (CATL)',
                            url: 'https://www.prnewswire.com/news-releases/catl-and-hyperstrong-sign-largest-sodium-ion-storage-agreement-302129123.html',
                            date: today
                        },
                        { 
                            title: { en: 'Global energy storage market to grow to 137GW/352GWh by 2030', ko: '글로벌 에너지 저장 시장, 2030년까지 137GW 규모로 성장 전망' }, 
                            summary: { en: 'BloombergNEF analysis shows the global energy storage market is set to quadruple by 2030, driven by AI and renewable integration.', ko: 'BloombergNEF 분석에 따르면, AI 및 신재생 에너지 통합에 힘입어 글로벌 에너지 저장 시장이 2030년까지 현재의 4배인 137GW 규모로 성장할 전망입니다.' }, 
                            source: 'BloombergNEF',
                            url: 'https://about.bnef.com/blog/global-energy-storage-market-to-grow-to-137gw-352gwh-by-2030/',
                            date: today
                        }
                    ],
                    wiring: [
                        { 
                            title: { en: 'Aptiv to Acquire Intercable Automotive Solutions for Harness Expansion', ko: '앱티브, 하네스 사업 확장을 위한 인터케이블 오토모티브 인수' }, 
                            summary: { en: 'Aptiv announced the acquisition of Intercable Automotive Solutions to strengthen its position in high-voltage busbar and connection systems.', ko: '앱티브(Aptiv)가 고전압 버스바 및 하네스 연결 시스템 시장에서의 입지를 강화하기 위해 인터케이블 오토모티브 인수를 발표했습니다.' }, 
                            source: 'Aptiv Newsroom',
                            url: 'https://www.aptiv.com/en/newsroom/article/aptiv-to-acquire-intercable-automotive-solutions',
                            date: today
                        },
                        { 
                            title: { en: 'Nissan showcases automated wire harness assembly at intelligent factory', ko: '닛산, 지능형 공장에서 와이어링 하네스 조립 자동화 시연' }, 
                            summary: { en: 'Nissan demonstrated a robotic system that automates the complex task of wire harness insertion, a significant step in smart manufacturing.', ko: '닛산이 스마트 제조의 핵심 단계인 와이어링 하네스 삽입 공정을 자동화하는 로봇 시스템을 자사 지능형 공장에서 시연했습니다.' }, 
                            source: 'Nissan Global News',
                            url: 'https://global.nissannews.com/en/releases/release-1349e4d58079a0b165b4c48325019d08-211129-01-e',
                            date: today
                        }
                    ],
                    automation: [
                        { 
                            title: { en: 'Intel Unveils World’s First Optical Compute Interconnect Chiplet', ko: '인텔, 세계 최초 광학 컴퓨팅 인터커넥트 칩렛 공개' }, 
                            summary: { en: 'Intel demonstrated the industry’s first fully integrated optical compute interconnect (OCI) chiplet to accelerate AI infrastructure data processing.', ko: '인텔이 AI 인프라의 데이터 처리를 가속화하기 위해 업계 최초의 완전 통합형 광학 컴퓨팅 인터커넥트(OCI) 칩렛을 선보였습니다.' }, 
                            source: 'Intel Newsroom',
                            url: 'https://www.intel.com/content/www/us/en/newsroom/news/intel-unveils-optical-compute-interconnect-chiplet.html',
                            date: today
                        },
                        { 
                            title: { en: 'NVIDIA and Partners Showcase Factory-Scale Digital Twins', ko: '엔비디아, 공장 규모의 디지털 트윈 시연' }, 
                            summary: { en: 'NVIDIA demonstrated how generative AI and digital twins are transforming industrial operations through high-fidelity simulations with Omniverse.', ko: '엔비디아가 옴니버스(Omniverse)를 통해 생성형 AI와 디지털 트윈이 어떻게 산업 운영을 변화시키고 있는지 시연했습니다.' }, 
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
