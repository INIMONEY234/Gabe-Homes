//Form submit logic
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully! We will contact you shortly.");
});



//Scroll down logic display
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    // If the scroll position is greater than 500px
    if (window.scrollY > 350) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



//Logic to show hamburger 
const menuBtn = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('#nav-menu');
const overlay = document.querySelector('#overlay');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Close menu if user clicks the dark overlay
overlay.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
});


//Logic to close nav bar after clicking
// Select all links inside the nav
const navItems = document.querySelectorAll('#nav-menu a');

// Loop through each link and add a click event
navItems.forEach(link => {
    link.addEventListener('click', () => {
        // Remove the active class from everything to close the menu
        menuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
    });
});