// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark mode toggle
const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
};

// Example feature to improve engagement
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#navbar a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => link.classList.add('text-blue-500'));
        link.addEventListener('mouseout', () => link.classList.remove('text-blue-500'));
    });
});
