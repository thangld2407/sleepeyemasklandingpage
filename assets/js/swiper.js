var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination"
    },
    variableWidth: 250,
    slidesPerView: 'auto',
    spaceBetween: 10,
    breakpoints: {
        1340: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    },
    mousewheel: false,
});

