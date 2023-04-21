import Swiper from '../vendor/swiper';

const initReviewsSwiper = () => {
  new Swiper('.swiper-reviews', {
    direction: 'horizontal',
    loop: false,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // slidesPerView: 1,

//     breakpoints: {

//       320: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },

//       768: {
//         slidesPerView: 2,
//         spaceBetween: 30,
//       },

//       1200: {
//         slidesPerView: 4,
//         spaceBetween: 40,
//       },
//     }
  })
}

export {initReviewsSwiper};
