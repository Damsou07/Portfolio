// Fige le menu à la navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const navOffsetTop = nav.offsetTop;
    if (window.scrollY >= navOffsetTop) {
        nav.style.position = 'fixed';
        nav.style.top = '0';
        nav.style.width = '98%';
        nav.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        nav.style.zIndex = '1000';
    }

    if (window.scrollY <= navOffsetTop) {
        nav.style.position = 'static';
        nav.style.boxShadow = 'none';
    }
});


// Correction du décalage lors des redirections internes
const adjustAnchorScroll = () => {
    const navHeight = document.querySelector('nav').offsetHeight;
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = anchor.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const targetPosition = targetElement.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
};

adjustAnchorScroll();


// Animations au scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        } else {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(50px)';
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
    observer.observe(section);
});
