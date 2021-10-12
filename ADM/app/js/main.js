let swiper = new Swiper('.swiper-container', {
    wrapperClass: 'swiper-wrapper',
    slideClass: 'swiper-item',
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});