# Global Industry Daily Briefing (GIDB) Blueprint

## Overview
A professional dashboard for industry professionals to stay updated on global trends in Robotics, Automotive, Battery, Wiring Harness, and Automation Equipment. The app provides curated daily briefings and maintains a historical log of all past reports for retrospective analysis.

## Features & Style
- **Visual Design:**
  - **Industrial Professional Theme:** Clean, high-contrast UI with a focus on readability.
  - **Dynamic Icons:** Industry-specific iconography (e.g., Robot for Robotics, Battery for Power systems).
  - **Responsive Layout:** Works seamlessly on desktop and mobile for on-the-go updates.
- **Functional Features:**
  - **Daily Briefing Engine:** Automatically generates or displays the latest industry news.
  - **Historical Logging:** Saves daily briefings to LocalStorage, organized by date.
  - **Archive Navigator:** A dedicated view to browse and read past briefings.
  - **Industry Segmentation:** Categorized news sections for focused reading.

## Technology Stack
- Framework-less HTML/CSS/JavaScript.
- **Web Components:** Encapsulated UI for Modular growth.
- **Modern CSS:** Grid/Flexbox, CSS Variables, and Container Queries.
- **LocalStorage API:** For client-side data persistence of historical logs.

## Current Plan: Initial Implementation
1.  **Project Cleanup:** Remove all legacy triathlon-related files.
2.  **Scaffolding:**
    - Initialize `index.html` with a modern shell.
    - Setup `services/storage.js` for log management.
    - Setup `services/news.js` for data fetching.
3.  **Component Development:**
    - `industry-briefing-app`: The main orchestrator.
    - `briefing-card`: Component for individual news items.
    - `archive-sidebar`: Navigation for historical logs.
4.  **Data Integration:**
    - Implement logic to check for "Today's Briefing" on load.
    - If missing, fetch latest data and save to logs.
5.  **Styling:** 
    - Apply professional typography and a color-coded system for different industries.
