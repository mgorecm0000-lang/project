# Blueprint: Lotto Number Generator

## 1. Overview

This application generates random lottery numbers. It allows users to click a button to get a set of unique numbers, simulating a lottery draw. The application is built with modern web technologies and automatically deployed via Cloudflare Pages.

## 2. Design and Features

### Layout & Style
- **Centering:** The main content is centered on the page.
- **Title:** A prominent "Lotto Number Generator" title.
- **Display Area:** A clean, well-defined area to show the generated numbers. Each number is styled individually for emphasis.
- **Button:** A styled button with a clear "Generate Numbers" label and a subtle hover effect.
- **Responsiveness:** The layout adapts to different screen sizes.
- **Dark/White Mode:** A toggle switch allows users to switch between light and dark themes.

### Functionality
- **Number Generation:** Clicking the button generates 6 unique random numbers between 1 and 45.
- **Display:** The generated numbers are displayed in the designated area.
- **Theme Persistence:** The selected theme (dark/light) is saved in local storage and applied on future visits.

## 3. Current Plan

- **HTML:** Add a theme toggle switch to `index.html`.
- **CSS:** Add styles for the toggle switch and create dark mode specific styles in `style.css`.
- **JavaScript:** Implement the logic in `main.js` to handle theme switching and save the user's preference in local storage.
- **Deployment:** Commit all changes to GitHub for automatic deployment.
