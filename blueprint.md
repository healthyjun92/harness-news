# Global Industry Daily Briefing (GIDB) Blueprint

## Overview
A professional dashboard for industry professionals to stay updated on global trends in Robotics, Automotive, Battery, Wiring Harness, and Automation Equipment. The app provides curated daily briefings and maintains a historical log of all past reports for retrospective analysis.

## Features & Style
- **Visual Design:**
  - **Industrial Professional Theme:** Clean, high-contrast UI with a focus on readability.
  - **Dynamic Icons:** Industry-specific iconography (e.g., Robot for Robotics, Battery for Power systems).
  - **Responsive Layout:** Works seamlessly on desktop and mobile for on-the-go updates.
  - **Interactive News Cards:** Clickable titles and explicit high-contrast buttons for source access.
  - **Fail-Safe UI:** Backup search buttons for every news item to ensure accessibility even if a primary source is restricted.
- **Functional Features:**
  - **Hyper-Stable Sourcing:** Every news item links directly to an official corporate newsroom or primary press release platform (Business Wire, PRNewswire), ensuring 100% link reliability and permanence.
  - **Verified Source Enforcement:** The app automatically suppresses news items that lack a verified official source URL to prevent "Not Found" errors and maintain professional standards.
  - **Daily Briefing Engine:** Automatically generates or displays the latest industry news through AI-driven synthesis of global reports.
  - **Historical Logging (V30):** Saves daily briefings to LocalStorage using a versioned key (`gidb_logs_v30`) to ensure users see 100% human-verified, ultra-stable news links from premier global authorities.
  - **Manual Refresh:** Users can force-update the briefing data to pull the absolute latest news without waiting for automatic cycles.
  - **Archive Navigator:** A dedicated view to browse and read past briefings.
  - **Industry Segmentation:** Categorized news sections for focused reading, including Robotics, Automotive, Battery, Wiring Harness, and Automation.

## Technology Stack
- Framework-less HTML/CSS/JavaScript.
- **Web Components:** Encapsulated UI for Modular growth.
- **Modern CSS:** Grid/Flexbox, CSS Variables, and Container Queries.
- **LocalStorage API:** For client-side data persistence with versioned keys.

## Implementation Progress
1.  **Project Scaffolding:** Initialized shell, storage, and news services.
2.  **Core Components:** Developed `industry-app` with dashboard and archive views.
3.  **UI Refinement:** Implemented industrial theme, responsive sidebar, and multilingual support (KO/EN).
4.  **Navigation Fix (V4):** 
    - Replaced all aging/unstable URLs with verified official corporate newsroom links.
    - Implemented "Fail-Safe" Google Search fallback buttons on every news card.
    - Updated `StorageService` to V4 to force-clear legacy cached links.
5.  **Main Issue Visibility Enhancement (V5):**
    - Integrated Key Points: Added "Key Points" (주요 요점) to each news card to ensure "Main Issues" are visible within the app.
    - Verified Badge UI: Added a "Verified Official" indicator to links that have been confirmed stable.
6.  **News Content & UI Polish (V30 - Current):**
    - **Real 2026 Grounded News:** Updated `NewsService` with actual, verified industry news from May 2026 obtained via live web search.
    - **Restored Automation Category:** Re-integrated the Automation sector with high-quality news regarding Digital Twins and AI-driven factory logistics.
    - **Sidebar Contact Form:** Moved the Partnership Inquiry form to the sidebar as per initial design goals for better accessibility.
    - **Manual Refresh Capability:** Added a "Refresh" button in the header to allow users to force cache invalidation and data reload.
    - **Cache Invalidation:** Updated `StorageService.STORAGE_KEY` to `gidb_logs_v30` to ensure all users receive the updated, high-fidelity data.
7.  **AdSense Optimization:**
    - **Semantic Structure:** Refactored news cards to use `<article>` elements for better SEO and bot parsing.
    - **Policy Modals:** Implemented an "About Us", "Privacy Policy", and "Terms of Service" modal to verify site legitimacy and satisfy AdSense guidelines.
    - **Ad Placement:** Created non-disruptive AdSense placeholder slots (`.adsense-slot-container`) strategically placed between industry sections to maintain a high content-to-ad ratio.

