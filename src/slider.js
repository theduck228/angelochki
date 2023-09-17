// document.addEventListener('DOMContentLoaded', () => {
//     const sliderContainer = document.querySelector('.slider-container');
//     const sliderWrapper = document.querySelector('.slider-wrapper');
//     const servicesCards = document.querySelector('.services-cards');
//     const slides = Array.from(servicesCards.querySelectorAll('.services-card'));
//     const prevButton = document.querySelector('.arrow-prev');
//     const nextButton = document.querySelector('.arrow-next');
//
//     const slideWidth = slides[0].offsetWidth;
//     const numVisibleSlides = 3;
//     const containerWidth = slideWidth * slides.length / numVisibleSlides;
//
//     let currentIndex = 0;
//
//     function updateSlider() {
//         sliderWrapper.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
//     }
//
//     function setActiveSlide(index) {
//         slides.forEach((slide) => {
//             slide.classList.remove('active');
//         });
//
//         for (let i = index; i < index + numVisibleSlides; i++) {
//             if (slides[i]) {
//                 slides[i].classList.add('active');
//             }
//         }
//     }
//
//     prevButton.addEventListener('click', () => {
//         if (currentIndex > 0) {
//             currentIndex--;
//             setActiveSlide(currentIndex);
//             updateSlider();
//         }
//     });
//
//     nextButton.addEventListener('click', () => {
//         if (currentIndex < slides.length - numVisibleSlides) {
//             currentIndex++;
//             setActiveSlide(currentIndex);
//             updateSlider();
//         }
//     });
//
//     sliderWrapper.style.width = `${containerWidth}px`;
//     setActiveSlide(currentIndex);
// });
var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});