var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination"
    },
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        992: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1340: {
            slidesPerView: 3,
            spaceBetween: 5
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 5
        }
    },
    mousewheel: false,
});

