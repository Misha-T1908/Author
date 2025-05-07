document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slideCounter = document.getElementById('slideCounter');
    let currentSlideIndex = 0;
    const totalSlides = slides.length;

    function updateSlideCounter() {
        slideCounter.textContent = `${currentSlideIndex + 1} / ${totalSlides}`;
    }

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        currentSlideIndex = index;
        updateButtonStates();
        updateSlideCounter();
    }

    function updateButtonStates() {
        prevBtn.disabled = currentSlideIndex === 0;
        nextBtn.disabled = currentSlideIndex === totalSlides - 1;
    }

    prevBtn.addEventListener('click', () => {
        if (currentSlideIndex > 0) {
            showSlide(currentSlideIndex - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlideIndex < totalSlides - 1) {
            showSlide(currentSlideIndex + 1);
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight' || event.key === 'PageDown') {
            if (currentSlideIndex < totalSlides - 1) {
                showSlide(currentSlideIndex + 1);
            }
        } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
            if (currentSlideIndex > 0) {
                showSlide(currentSlideIndex - 1);
            }
        }
    });

    // Initial setup
    showSlide(0);
});
