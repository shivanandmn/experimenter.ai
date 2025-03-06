/**
 * Experimenter.ai - Main JavaScript
 * Handles animations, interactivity, and responsive behavior
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll) library
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Navbar scroll behavior
    const navbar = document.querySelector('.navbar');
    
    // Add CSS for navbar-scrolled
    const style = document.createElement('style');
    style.textContent = `
        .navbar-scrolled {
            background-color: rgba(6, 18, 32, 0.95);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }
    `;
    document.head.appendChild(style);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile navigation toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbarToggler.contains(e.target) && !navbarCollapse.contains(e.target) && navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    }

    // Dropdown menus for mobile
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth < 992) {
                e.preventDefault();
                e.stopPropagation();
                
                const dropdown = this.nextElementSibling;
                if (dropdown) {
                    dropdown.classList.toggle('show');
                }
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        const dropdowns = document.querySelectorAll('.dropdown-menu.show');
        dropdowns.forEach(dropdown => {
            if (!dropdown.previousElementSibling.contains(e.target)) {
                dropdown.classList.remove('show');
            }
        });
    });

    // Add CSS class for navbar scrolled state on page load if needed
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    }

    // Add parallax effect to hero section
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const translateY = scrollPosition * 0.3;
            
            if (scrollPosition < 600) {
                heroSection.style.backgroundPosition = `center ${translateY}px`;
            }
        });
    }

    // Add hover effects for solution and industry cards
    const cards = document.querySelectorAll('.solution-card, .industry-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Add responsive behavior for the platform visual
    const platformVisual = document.querySelector('.platform-visual');
    
    if (platformVisual) {
        window.addEventListener('resize', function() {
            if (window.innerWidth < 768) {
                platformVisual.style.height = '280px';
            } else if (window.innerWidth < 992) {
                platformVisual.style.height = '320px';
            } else {
                platformVisual.style.height = '400px';
            }
        });
        
        // Set initial height based on screen size
        if (window.innerWidth < 768) {
            platformVisual.style.height = '280px';
        } else if (window.innerWidth < 992) {
            platformVisual.style.height = '320px';
        }
    }

    // Add typing effect to the feature highlight
    const featureHighlight = document.querySelector('.feature-highlight span');
    
    if (featureHighlight) {
        const text = featureHighlight.textContent;
        featureHighlight.textContent = '';
        
        let i = 0;
        const typingEffect = setInterval(function() {
            if (i < text.length) {
                featureHighlight.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 50);
    }
});
