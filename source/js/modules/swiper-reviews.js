import Swiper from '../vendor/swiper';

const initReviewsSwiper = () => {
  new Swiper('.reviews__swiper', {
    direction: 'horizontal',
    loop: false,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
}

export {initReviewsSwiper};
