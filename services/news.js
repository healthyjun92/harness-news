/**
 * News Service for Global Industry Daily Briefing
 * Handles fetching/generating latest industry news.
 */

const INDUSTRIES = {
    ROBOTICS: { id: 'robotics', name: 'Robotics', icon: 'bot' },
    AUTOMOTIVE: { id: 'automotive', name: 'Automotive', icon: 'car' },
    BATTERY: { id: 'battery', name: 'Battery', icon: 'battery-charging' },
    WIRING_HARNESS: { id: 'wiring', name: 'Wiring Harness', icon: 'zap' },
    AUTOMATION: { id: 'automation', name: 'Automation', icon: 'cpu' }
};

export const NewsService = {
    getIndustries() {
        return Object.values(INDUSTRIES);
    },

    /**
     * Simulate fetching latest news for all industries
     */
    async fetchLatestBriefing() {
        // In a real app, this would be a fetch() call to a backend or News API
        return new Promise((resolve) => {
            setTimeout(() => {
                const briefing = {
                    robotics: [
                        { title: 'New Humanoid Robot Unveiled in Japan', summary: 'A breakthrough in bipedal balance has been achieved by a leading Tokyo tech firm.', source: 'RoboTech Daily' },
                        { title: 'Global Robot Sales Surge 15%', summary: 'Industrial automation adoption is accelerating across Southeast Asia.', source: 'Global Markets' }
                    ],
                    automotive: [
                        { title: 'Electric Vehicle Range Reaches 1000km', summary: 'Solid-state battery integration allows for record-breaking travel distances.', source: 'AutoNews' },
                        { title: 'Autonomous Driving Level 4 Approval', summary: 'Major European cities begin permitting full autonomy for public transport.', source: 'Transport Weekly' }
                    ],
                    battery: [
                        { title: 'New Lithium-Sulfur Battery Patent', summary: 'A startup claims a 40% reduction in production costs using sustainable materials.', source: 'Energy Insider' },
                        { title: 'Global Battery Gigafactory Expansion', summary: 'Plans for 5 new factories in North America announced this week.', source: 'Power Digest' }
                    ],
                    wiring: [
                        { title: 'High-Voltage Wiring Standards Updated', summary: 'New safety protocols for EV charging infrastructure have been finalized.', source: 'Wire & Cable' },
                        { title: 'Weight-Saving Harness Materials Found', summary: 'NASA-inspired alloys reduce vehicle weight by up to 5kg.', source: 'Tech Review' }
                    ],
                    automation: [
                        { title: 'AI-Driven Factory Optimization', summary: 'Machine learning models reduce production waste by 30% in trial runs.', source: 'Industrial AI' },
                        { title: 'Collaborative Robots in Small Businesses', summary: 'Affordable cobots are transforming the craft manufacturing sector.', source: 'SME News' }
                    ]
                };
                resolve(briefing);
            }, 1000);
        });
    }
};
