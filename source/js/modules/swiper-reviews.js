import Swiper from '../vendor/swiper';
const reviewsSwiper = document.querySelector('.reviews__swiper');

const initReviewsSwiper = () => {
  if (reviewsSwiper) {
    (() =>
      new Swiper('.reviews__swiper', {
        direction: 'horizontal',
        loop: false,

        initialSlide: 0,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    )();

  }
};

export {initReviewsSwiper};
