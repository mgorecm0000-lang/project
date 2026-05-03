# Blueprint: Lotto Number Generator

## 1. Overview

This application generates random lottery numbers. It allows users to click a button to get a set of unique numbers, simulating a lottery draw. It also includes a contact form for partnership inquiries. The application is built with modern web technologies and automatically deployed via Cloudflare Pages.

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
- **Partnership Inquiry Form:** A simple contact form allows users to send inquiries via Formspree.

## 3. Current Plan

- **HTML:** Add a contact form section to `index.html`.
- **CSS:** Add styles for the contact form, ensuring it works with both light and dark themes.
- **JavaScript:** No changes needed for the form functionality.
- **Deployment:** Commit all changes to GitHub for automatic deployment.
