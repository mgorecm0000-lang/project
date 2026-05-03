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

### Functionality
- **Number Generation:** Clicking the button generates 6 unique random numbers between 1 and 45.
- **Display:** The generated numbers are displayed in the designated area.

## 3. Current Plan

- **HTML:** Update `index.html` with the necessary elements (title, number display, button).
- **CSS:** Create styles in `style.css` for a clean and modern user interface.
- **JavaScript:** Implement the number generation logic in `main.js`.
- **Deployment:** All changes will be committed to GitHub to trigger an automatic deployment on Cloudflare Pages.
