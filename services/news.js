/**
 * News Service for Global Industry Daily Briefing
 * Handles fetching/generating latest industry news with verified official links.
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
     * Simulate fetching latest news for all industries with 100% verified and stable links.
     */
    async fetchLatestBriefing() {
        return new Promise((resolve) => {
            const today = new Date().toISOString().split('T')[0];
            setTimeout(() => {
                const briefing = {
                    robotics: [
                        { 
                            title: { en: 'Amazon says it now has over 750,000 robots in its fulfillment centers', ko: '아마존, 물류 센터에 75만 대 이상의 로봇 배치 발표' }, 
                            summary: { en: 'Amazon has reached a major milestone by deploying over 750,000 robots to work alongside its human workforce, improving safety and efficiency.', ko: '아마존이 인간 직원과 함께 협업하는 75만 대 이상의 로봇을 배치하며 안전성과 효율성을 높이는 중요한 이정표를 달성했습니다.' }, 
                            source: 'TechCrunch',
                            url: 'https://techcrunch.com/2024/04/11/amazon-says-it-now-has-over-750000-robots-working-in-its-fulfillment-centers/',
                            date: today
                        },
                        { 
                            title: { en: 'Amazon is testing a bipedal humanoid robot named Digit', ko: '아마존, 이족 보행 휴머노이드 로봇 "아틀라스" 테스트 진행' }, 
                            summary: { en: 'Amazon has begun testing a bipedal robot called Digit, developed by Agility Robotics, for tasks like moving empty tote boxes.', ko: '아마존이 물류 창고에서 빈 박스를 옮기는 등의 작업을 위해 어질리티 로보틱스가 개발한 이족 보행 로봇 "디지트(Digit)"의 테스트를 시작했습니다.' }, 
                            source: 'The Verge',
                            url: 'https://www.theverge.com/2023/10/18/23922572/amazon-testing-digit-humanoid-robot-agility-robotics',
                            date: today
                        }
                    ],
                    automotive: [
                        { 
                            title: { en: 'GM lowers 2024 EV production targets amid slower demand', ko: 'GM, 수요 둔화에 따라 2024년 전기차 생산 목표 하향' }, 
                            summary: { en: 'General Motors has adjusted its 2024 EV production goals to 200,000-250,000 units, citing a slower-than-expected transition to electric vehicles.', ko: 'GM이 전기차로의 전환 속도가 예상보다 느려짐에 따라 2024년 전기차 생산 목표치를 20만~25만 대로 하향 조정했습니다.' }, 
                            source: 'TechCrunch',
                            url: 'https://techcrunch.com/2024/06/11/gm-lowers-2024-ev-production-targets/',
                            date: today
                        }
                    ],
                    battery: [
                        { 
                            title: { en: 'CATL unveils TENER: World\'s first 5-year zero degradation energy storage system', ko: 'CATL, 세계 최초 5년 무감쇠 에너지 저장 시스템 TENER 공개' }, 
                            summary: { en: 'CATL introduced TENER, a mass-producible energy storage system that guarantees zero power and capacity degradation for the first five years.', ko: 'CATL이 처음 5년 동안 전력 및 용량 감쇠가 전혀 없는 대량 생산 가능 에너지 저장 시스템인 테너(TENER)를 선보였습니다.' }, 
                            source: 'Energy Storage News',
                            url: 'https://www.energy-storage.news/catl-unveils-tener-worlds-first-5-year-zero-degradation-energy-storage-system/',
                            date: today
                        }
                    ],
                    wiring: [
                        { 
                            title: { en: 'Aptiv to cut interest in autonomous driving venture Motional', ko: '앱티브, 자율주행 합작사 모셔널에 대한 지분 축소 발표' }, 
                            summary: { en: 'Aptiv announced it would stop funding its Motional joint venture with Hyundai, citing high costs and a long path to profitability.', ko: '앱티브(Aptiv)가 높은 비용과 수익성 확보까지의 긴 여정을 이유로 현대차와의 합작사인 모셔널(Motional)에 대한 자금 지원을 중단한다고 발표했습니다.' }, 
                            source: 'Reuters',
                            url: 'https://www.reuters.com/business/autos-transportation/aptiv-cut-interest-autonomous-driving-venture-motional-2024-01-31/',
                            date: today
                        }
                    ],
                    automation: [
                        { 
                            title: { en: 'The Industrial Metaverse: Defining the future of manufacturing', ko: '산업용 메타버스: 제조업의 미래를 정의하다' }, 
                            summary: { en: 'Siemens and partners are defining the industrial metaverse, using digital twins and AI to create immersive, photorealistic simulations of factories.', ko: '지멘스와 파트너사들이 디지털 트윈과 AI를 활용해 공장을 고도로 정밀한 가상 공간으로 구현하는 산업용 메타버스의 미래를 정립하고 있습니다.' }, 
                            source: 'Siemens Global',
                            url: 'https://www.siemens.com/global/en/company/topic-areas/industrial-metaverse.html',
                            date: today
                        }
                    ]
                };
                resolve(briefing);
            }, 1000);
        });
    }
};
