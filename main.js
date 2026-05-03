document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numberSpans = document.querySelectorAll('.lotto-number');
    const themeSwitch = document.getElementById('checkbox');

    // Load saved theme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark') {
            themeSwitch.checked = true;
        }
    }

    // Theme switcher
    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    });

    // Lotto number generator
    generateBtn.addEventListener('click', () => {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        numberSpans.forEach((span, index) => {
            span.textContent = sortedNumbers[index];
        });
    });
});
