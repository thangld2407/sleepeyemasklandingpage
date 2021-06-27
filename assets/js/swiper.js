var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination"
    },
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        1340: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        }
    },
    mousewheel: false,
});

