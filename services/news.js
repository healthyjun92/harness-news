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
                            title: { en: 'AGIBOT A2 debuts at the Met Gala', ko: 'AGIBOT A2, 메트 갈라(Met Gala)에서 데뷔' }, 
                            summary: { en: 'AGIBOT debuted its full-size humanoid robot, A2, at the 2026 Met Gala demonstrating embodied AI in a complex environment.', ko: 'AGIBOT은 2026년 메트 갈라에서 실물 크기의 휴머노이드 로봇 A2를 선보이며 복잡한 환경에서 구현된 AI를 시연했습니다.' }, 
                            mainPoints: {
                                en: ['Debuted at 2026 Met Gala', 'Interacted with crowds and served beverages', 'Surpassed 10,000 units in production'],
                                ko: ['2026년 메트 갈라에서 데뷔', '군중과 상호작용하며 음료 서빙 시연', '생산량 1만 대 돌파']
                            },
                            source: 'PR Newswire',
                            url: '#',
                            date: '2026-05-05',
                            isVerified: true
                        }
                    ],
                    automotive: [
                        { 
                            title: { en: 'Auto China concludes highlighting SDVs', ko: '오토 차이나, SDV(소프트웨어 중심 자동차) 강조하며 폐막' }, 
                            summary: { en: 'Auto China (Beijing) concluded in early May, highlighting the industry lead in Software-Defined Vehicles and intelligent connectivity.', ko: '5월 초 베이징에서 열린 오토 차이나는 소프트웨어 정의 차량(SDV)과 지능형 연결 기술의 산업 리더십을 강조하며 폐막했습니다.' }, 
                            mainPoints: {
                                en: ['Concluded on May 3, 2026', 'Focus on Software-Defined Vehicles (SDVs)', 'Showcased advancements in intelligent connectivity'],
                                ko: ['2026년 5월 3일 폐막', '소프트웨어 중심 자동차(SDV)에 초점', '지능형 연결 기술의 발전 소개']
                            },
                            source: 'Phyron',
                            url: '#',
                            date: '2026-05-03',
                            isVerified: true
                        }
                    ],
                    battery: [
                        { 
                            title: { en: 'CATL announces Sodium-Ion mass production agreement', ko: 'CATL, 나트륨 이온 배터리 대량 생산 계약 발표' }, 
                            summary: { en: 'CATL announced a historic 60GWh supply agreement, marking a breakthrough for the mass production of cheaper and stable sodium-ion batteries.', ko: 'CATL은 60GWh 규모의 공급 계약을 체결하며 더 저렴하고 안정적인 나트륨 이온 배터리의 대량 생산 돌파구를 마련했습니다.' }, 
                            mainPoints: {
                                en: ['Historic 60GWh supply agreement announced on May 6', 'Breakthrough for mass production of sodium-ion cells', 'Changan Nevo A06 expected to use these cells'],
                                ko: ['5월 6일 60GWh 규모의 공급 계약 발표', '나트륨 이온 셀 대량 생산의 획기적 전환점', '창안 네보 A06 모델에 탑재 예정']
                            },
                            source: 'Sustainability Online',
                            url: '#',
                            date: '2026-05-06',
                            isVerified: true
                        }
                    ],
                    wiring: [
                        { 
                            title: { en: '14th International Conference on Automotive Wire Harness', ko: '제14회 국제 자동차 와이어 하네스 컨퍼런스 개최' }, 
                            summary: { en: 'The 14th International Conference on Automotive Wire Harness was held in Germany, focusing on SDV standardization and vehicle variant diversity.', ko: '독일에서 제14회 국제 자동차 와이어 하네스 컨퍼런스가 개최되어 SDV 표준화 및 차량 변형 다양성에 대해 논의했습니다.' }, 
                            mainPoints: {
                                en: ['Held May 5–6, 2026, in Ludwigsburg, Germany', 'Focuses on the nervous system of modern vehicles', 'Discussions on SDV standardization'],
                                ko: ['2026년 5월 5일~6일 독일 루트비히스부르크에서 개최', '현대 차량의 신경망에 초점', 'SDV 표준화 논의']
                            },
                            source: 'Bordnetzkongress',
                            url: '#',
                            date: '2026-05-05',
                            isVerified: true
                        }
                    ]
                };
                resolve(briefing);
            }, 1000);
        });
    }
};