document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.getElementById('app-container');
    const statusSpan = document.getElementById('current-theme-status');

    // Function to set the theme
    function setTheme(isDark) {
        if (isDark) {
            body.classList.add('dark-theme');
            toggleButton.textContent = 'Switch to Light Mode';
            statusSpan.textContent = 'Dark';
        } else {
            body.classList.remove('dark-theme');
            toggleButton.textContent = 'Switch to Dark Mode';
            statusSpan.textContent = 'Light';
        }
        // Optional: Save the preference to local storage
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    // Load saved preference or default to light
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        setTheme(true);
    } else {
        setTheme(false); // Initialize with light theme
    }

    // Toggle logic on button click
    toggleButton.addEventListener('click', () => {
        const isCurrentlyDark = body.classList.contains('dark-theme');
        setTheme(!isCurrentlyDark);
    });
});
