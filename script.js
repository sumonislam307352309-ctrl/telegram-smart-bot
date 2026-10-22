// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.85)';
        navbar.style.boxShadow = 'none';
    }
});

// Simple form submit (prevent default + alert)
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('ধন্যবাদ! তোমার মেসেজ পাঠানো হয়েছে। (এটা ডেমো — পরে Formspree বা EmailJS কানেক্ট করা যাবে)');
    e.target.reset();
});

// Animate progress bars when in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.progress').forEach(bar => {
                bar.style.width = bar.style.width; // trigger animation
            });
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-card').forEach(card => {
    observer.observe(card);
});
