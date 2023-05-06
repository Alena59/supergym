import Swiper from '../vendor/swiper';
const trainersSwiper = document.querySelector('.trainers__swiper');

const initTrainersSwiper = () => {
  if (trainersSwiper) {
    (() =>
      new Swiper('.trainers__swiper', {
        direction: 'horizontal',
        loop: true,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints: {

          320: {
            initialSlide: -1,
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
          },

          768: {
            initialSlide: -1,
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
          },

          1200: {
            initialSlide: -1,
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 40,
          },
        },
      })
    )();
  }
};

export {initTrainersSwiper};
