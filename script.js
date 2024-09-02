const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

const currentYear = new Date().getFullYear();

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(nav => nav.classList.remove('active'));
            // Add active class to the clicked link
            this.classList.add('active');
        });
    });
});


document.getElementById('copyright-year').textContent = currentYear;



const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelectorAll('.nav-links').forEach(nav => nav.classList.toggle('dark-mode'));
    document.querySelector('.hero').classList.toggle('dark-mode');
    document.querySelector('.facts').classList.toggle('dark-mode');
    document.querySelectorAll('.monument-title').forEach(title => title.classList.toggle('dark-mode'));
    document.querySelectorAll('.footer-column').forEach(column => column.classList.toggle('dark-mode'));
    document.querySelectorAll('.footer-bottom p').forEach(p => p.classList.toggle('dark-mode'));
    document.querySelectorAll('.footer-bottom a').forEach(a => a.classList.toggle('dark-mode'));

    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️ Light Mode';
      } else {
        darkModeToggle.textContent = '🌙 Dark Mode';
      }
});
