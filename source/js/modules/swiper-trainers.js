import Swiper from 'swiper';

// import Swiper, {Navigation} from 'swiper';

const initTrainersSwiper = (swiper) => {
  if (swiper) {
    // eslint-disable-next-line
    new Swiper('swiper', {
      modules: [Navigation],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      loop: true,

      breakpoints: {

        280: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 22,
          initialSlide: 2,
        },

        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 22,
          initialSlide: 2,
        },

        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 30,
          initialSlide: 2,
        },

        1200: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 40,
          initialSlide: 0,
        },
      },
    });
  }
};

export {initTrainersSwiper};
