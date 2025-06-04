import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

new Swiper('#game-words-swiper', {
  modules: [Pagination, Autoplay],
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: true,
    },
    1200: {
      slidesPerView: 5,
      allowTouchMove: false,
    },
  },
});
