// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 25px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and sections for animation
document.querySelectorAll('.objective-card, .info-card, .output-card, .prize-category, .mention-card, .organizer-card, .rule-card, .contact-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Countdown Timer to Registration Deadline
function updateCountdown() {
    const deadline = new Date('2025-11-14T23:59:59').getTime();
    const now = new Date().getTime();
    const distance = deadline - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // You can add a countdown element in the HTML and update it here
        // For now, we'll just log it
        console.log(`Time until deadline: ${days}d ${hours}h ${minutes}m ${seconds}s`);
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Add active state to current section in navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.style.color = 'var(--primary-color)';
            } else {
                navLink.style.color = 'var(--text-dark)';
            }
        }
    });
});

// Add hover effect to prize rows
document.querySelectorAll('.prize-row').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
    });

    row.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Lazy load background patterns
if ('IntersectionObserver' in window) {
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    });

    const hero = document.querySelector('.hero');
    if (hero) {
        heroObserver.observe(hero);
    }
}

// Add click event to CTA buttons for analytics (optional)
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const buttonText = this.textContent.trim();
        console.log(`Button clicked: ${buttonText}`);
        // You can add analytics tracking here
    });
});

// Prevent default form submission (if you add a contact form later)
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted');
    });
});

// Add print styles handler
window.addEventListener('beforeprint', () => {
    document.body.style.background = 'white';
});

// Easter egg: Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join('') === konamiPattern.join('')) {
        document.body.style.animation = 'rainbow 2s infinite';
        console.log('🌈 Gender equality unlocked! 🌈');
        setTimeout(() => {
            document.body.style.animation = '';
        }, 3000);
    }
});

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

console.log('🚀 Gender Hack website loaded successfully!');
console.log('💜 Organized by Women in Big Data Italy, IFAB, ICSC & Università del Salento');
