const swiper = document.querySelector('.swiper-container');
const swiper2 = document.querySelector('.swiper-container2');

let Myswiper1 = new Swiper('.slider-conteiner', {
    wrapperClass: 'slider-wrapper',
    slideClass: 'swiper-item',
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },
    // autoplay: {
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

let Myswiper2 = new Swiper('.customers__container', {
    wrapperClass: 'customers__wrapper',
    slideClass: 'customers__item',
    slidesPerView: 6,
    loop: true,
    navigation: {
        nextEl: '.customers-button-next',
        prevEl: '.customers-button-prev',
    },
    // autoplay: {
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false
    // }
});