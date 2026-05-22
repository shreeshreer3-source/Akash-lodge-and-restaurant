// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }, 1500);
    }
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar Solid Background on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('solid');
    } else {
        navbar.classList.remove('solid');
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.fade-in-scroll');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Smooth Scroll for Navigation Links
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// WhatsApp Button Interaction
const whatsappButton = document.querySelector('.whatsapp-button');

if (whatsappButton) {
    whatsappButton.addEventListener('mouseover', () => {
        whatsappButton.style.transform = 'scale(1.1)';
    });

    whatsappButton.addEventListener('mouseout', () => {
        whatsappButton.style.transform = 'scale(1)';
    });
}

// Room Card Hover Effect
const roomCards = document.querySelectorAll('.room-card');

roomCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Amenity Card Hover Effect
const amenityCards = document.querySelectorAll('.amenity-card');

amenityCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Gallery Hover Effect
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// Page Load Animation
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease';
    }
    
    // Trigger initial scroll check for elements already in view
    revealOnScroll();
});

// Add scroll-aware animations
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    // Add parallax effect to hero section
    const hero = document.querySelector('.hero-background');
    if (hero && scrollPosition < window.innerHeight) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }

    // Show/Hide Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    if (scrollPosition > 200) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Back to Top Button Click
const backToTopButton = document.getElementById('backToTop');
if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Contact Form Interactions (if needed for future)
const contactLinks = document.querySelectorAll('.contact-detail a');

contactLinks.forEach(link => {
    if (link.href.startsWith('tel:') || link.href.startsWith('https://wa.me')) {
        link.addEventListener('click', (e) => {
            console.log('Contact action triggered:', link.href);
        });
    }
});

// Performance: Debounce scroll events
let scrollTimeout;
const debounceScroll = () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        revealOnScroll();
    }, 100);
};

window.addEventListener('scroll', debounceScroll);

// Mobile Responsive Navigation Close on Window Resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

console.log('Akash Lodge website loaded successfully');
