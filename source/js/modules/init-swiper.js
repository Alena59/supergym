import Swiper, {Navigation, Pagination} from '../../../node_modules/swiper/swiper-bundle';
Swiper.use([Navigation, Pagination]);

const trainersSwiper = document.querySelector('.trainers__swiper');
const reviewsSwiper = document.querySelector('.reviews__swiper');

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
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
          },

          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
          },

          1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 40,
          },
        },
      })
    )();
  }
};

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

export {initTrainersSwiper, initReviewsSwiper};
