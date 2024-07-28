document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slideCount = slides.children.length;
    const slideWidth = slides.children[0].offsetWidth;
    let index = 0;

    function nextSlide() {
        index++;
        slides.style.transition = 'transform 1s ease';
        slides.style.transform = `translateX(${-index * slideWidth}px)`;

        if (index === slideCount - 1) {
            setTimeout(() => {
                slides.style.transition = 'none';
                slides.style.transform = 'translateX(0)';
                index = 0;
            }, 1000); // Match this duration with the transition duration
        }
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



