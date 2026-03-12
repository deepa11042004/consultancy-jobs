document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            // Simplified mobile menu logic for the demo
            alert('Mobile menu clicked. (Implement full menu overlay here)');
        });
    }

    // Optional: Add simple sticky header effect on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
        } else {
            navbar.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
        }
    });

    // Pill hover effect animation (optional js enhancement)
    const pills = document.querySelectorAll('.pill');
    pills.forEach(pill => {
        pill.addEventListener('mouseenter', () => {
             // Just confirming interaction
        });
    });

    console.log("Job Platform Loaded");
});
