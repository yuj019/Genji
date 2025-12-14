/**
 * Genji Portfolio - Interactive Elements
 * Inspired by the flowing scroll aesthetics of emaki
 */

// ===================================
// Smooth Scroll & Navigation
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollAnimations();
    initProjectAnimations();
    initParallax();
    initCursorEffects();
});

/**
 * Navigation scroll effects
 */
function initNavigation() {
    const nav = document.querySelector('.navigation');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow when scrolled
        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Intersection Observer for scroll animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe section elements
    const sections = document.querySelectorAll('.about, .work, .contact');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(section);
    });
}

/**
 * Project card animations
 */
function initProjectAnimations() {
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        projectObserver.observe(project);
    });
}

/**
 * Parallax effects for decorative elements
 */
function initParallax() {
    const clouds = document.querySelectorAll('.cloud');
    const blossoms = document.querySelectorAll('.cherry-blossom');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        clouds.forEach((cloud, index) => {
            const speed = 0.3 + (index * 0.1);
            const yPos = -(scrolled * speed);
            cloud.style.transform = `translateY(${yPos}px)`;
        });

        blossoms.forEach((blossom, index) => {
            const speed = 0.2 + (index * 0.05);
            const yPos = scrolled * speed;
            const rotation = scrolled * 0.1;
            blossom.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
        });
    });
}

/**
 * Custom cursor effects for interactive elements
 */
function initCursorEffects() {
    const interactiveElements = document.querySelectorAll(
        'a, .project, .skill-category'
    );

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            document.body.style.cursor = 'pointer';
        });

        element.addEventListener('mouseleave', () => {
            document.body.style.cursor = 'default';
        });
    });
}

/**
 * Scroll progress indicator (optional)
 */
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 2px;
        background: linear-gradient(90deg, var(--color-gold), var(--color-gold-light));
        z-index: 1000;
        transform-origin: left;
        transform: scaleX(0);
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.pageYOffset / windowHeight);
        progressBar.style.transform = `scaleX(${scrolled})`;
    });
}

/**
 * Preload optimization
 */
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Fade in hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease';
            heroContent.style.opacity = '1';
        }, 100);
    }
});

/**
 * Responsive menu toggle (for mobile)
 */
function initMobileMenu() {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: var(--color-charcoal);
        cursor: pointer;
    `;

    const navContent = document.querySelector('.nav-content');
    const navLinks = document.querySelector('.nav-links');

    if (window.innerWidth <= 768) {
        navContent.insertBefore(menuToggle, navLinks);
        menuToggle.style.display = 'block';

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menuToggle.style.display = 'none';
            navLinks.classList.remove('active');
        } else {
            menuToggle.style.display = 'block';
        }
    });
}

// Initialize mobile menu
initMobileMenu();

/**
 * Accessibility enhancements
 */
document.addEventListener('keydown', (e) => {
    // Allow keyboard navigation
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

/**
 * Performance optimization - Debounce scroll events
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedParallax = debounce(initParallax, 10);
window.addEventListener('scroll', debouncedParallax);

/**
 * Easter egg: Konami code for special effect
 */
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateGenjiMode();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateGenjiMode() {
    // Add cherry blossoms falling animation
    const numPetals = 50;
    for (let i = 0; i < numPetals; i++) {
        createFallingPetal();
    }
}

function createFallingPetal() {
    const petal = document.createElement('div');
    petal.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: radial-gradient(circle, var(--color-dusty-pink), transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        top: -10px;
        left: ${Math.random() * 100}%;
        animation: fall ${5 + Math.random() * 5}s linear;
    `;

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 10000);
}

// Add falling animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }

    body.keyboard-nav *:focus {
        outline: 2px solid var(--color-gold);
        outline-offset: 2px;
    }

    @media (max-width: 768px) {
        .nav-links {
            position: fixed;
            top: 80px;
            right: -100%;
            background: var(--color-cream);
            flex-direction: column;
            padding: 2rem;
            box-shadow: 0 10px 40px var(--color-shadow);
            transition: right 0.3s ease;
            border-radius: 4px;
            width: 250px;
        }

        .nav-links.active {
            right: 1rem;
        }
    }
`;
document.head.appendChild(style);

// Console message for developers
console.log('%c源氏物語 Portfolio', 'font-size: 20px; color: #D4AF37; font-family: serif;');
console.log('%cDesigned with elegance inspired by The Tale of Genji', 'font-size: 12px; color: #8B7E74;');
console.log('%cTry the Konami code for a special effect! ↑↑↓↓←→←→BA', 'font-size: 10px; color: #9FA898;');
