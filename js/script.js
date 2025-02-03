document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector(".slides");
    const slideImages = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentIndex = 0;
    const totalSlides = slideImages.length;

    function updateSlidePosition() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
        updateSlidePosition();
    }

    function prevSlide() {
        currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
        updateSlidePosition();
    }

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    setInterval(nextSlide, 3000); // Автоматичне перемикання кожні 3 секунди
});
