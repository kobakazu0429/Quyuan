const Swiper = require('swiper/bundle').default;
require('swiper/css/bundle');
require('./swiper.css');

const createSwiper = ({ loop }) => {
  return new Swiper(".swiper", {
    loop,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

module.exports = createSwiper;
