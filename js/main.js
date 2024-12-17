
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio Website Loaded!");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 60; 
        const targetPosition = target.offsetTop - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// ScrollReveal Animations
document.addEventListener("DOMContentLoaded", () => {
    ScrollReveal().reveal('.section-title', {
        origin: 'top',
        distance: '50px',
        duration: 800,
        delay: 200
    });

    ScrollReveal().reveal('.about-image img', {
        origin: 'left',
        distance: '50px',
        duration: 1000,
        delay: 300
    });

    ScrollReveal().reveal('.about-content', {
        origin: 'right',
        distance: '50px',
        duration: 1000,
        delay: 400
    });

    ScrollReveal().reveal('.project-card', {
        origin: 'bottom',
        distance: '30px',
        duration: 1000,
        delay: 300,
        interval: 200
    });

    ScrollReveal().reveal('.contact-form', {
        origin: 'bottom',
        distance: '30px',
        duration: 1000,
        delay: 300
    });

    ScrollReveal().reveal('.social-links a', {
        origin: 'bottom',
        distance: '30px',
        duration: 1000,
        delay: 400,
        interval: 200
    });
});
// Initialize Particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100, 
            density: {
                enable: true,
                value_area: 800 
            }
        },
        color: {
            value: "#00ADB5" 
        },
        shape: {
            type: "circle", 
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        move: {
            enable: true,
            speed: 2, 
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out"
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse" 
            },
            onclick: {
                enable: true,
                mode: "push" 
            }
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

