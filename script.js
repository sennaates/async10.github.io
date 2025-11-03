// ==================== 
// Smooth Scrolling for Navigation Links
// ==================== 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    });
});

// ==================== 
// Mobile Hamburger Menu Toggle
// ==================== 

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ==================== 
// Navbar Background on Scroll
// ==================== 

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==================== 
// Scroll Reveal Animation
// ==================== 

const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

// Initial check on page load
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Check on scroll
window.addEventListener('scroll', revealOnScroll);

// ==================== 
// Add Stagger Effect to Reveal Elements
// ==================== 

// Add staggered delay to reveal animations
document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    const teamCards = document.querySelectorAll('.team-card');
    
    featureCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
    });
    
    teamCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
    });
});

// ==================== 
// Active Navigation Link Highlight
// ==================== 

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const highlightNavOnScroll = () => {
    const scrollPosition = window.scrollY + 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNavOnScroll);

// ==================== 
// Smooth Page Load Animation
// ==================== 

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==================== 
// Performance Optimization: Throttle Scroll Events
// ==================== 

function throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    
    return function(...args) {
        const currentTime = Date.now();
        const timeSinceLastExec = currentTime - lastExecTime;
        
        clearTimeout(timeoutId);
        
        if (timeSinceLastExec > delay) {
            func.apply(this, args);
            lastExecTime = currentTime;
        } else {
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastExecTime = Date.now();
            }, delay - timeSinceLastExec);
        }
    };
}

// Apply throttling to scroll events for better performance
const throttledReveal = throttle(revealOnScroll, 100);
const throttledNavHighlight = throttle(highlightNavOnScroll, 100);

window.removeEventListener('scroll', revealOnScroll);
window.removeEventListener('scroll', highlightNavOnScroll);

window.addEventListener('scroll', throttledReveal);
window.addEventListener('scroll', throttledNavHighlight);

// ==================== 
// Accessibility: Keyboard Navigation
// ==================== 

// Add keyboard support for hamburger menu
hamburger.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        hamburger.click();
    }
});

// ==================== 
// Console Welcome Message
// ==================== 

console.log('%c🔌 Async10', 'color: #31baaa; font-size: 24px; font-weight: bold;');
console.log('%cGeleceğin Enerjisini Güvence Altına Alıyoruz', 'color: #b8c5d6; font-size: 14px;');
console.log('%cEV Şarj İstasyonları için Güvenlik Yazılımları ve Anomali Tespiti', 'color: #9fd46c; font-size: 12px;');

