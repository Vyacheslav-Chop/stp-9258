import Swiper from 'swiper';

import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const swiper = new Swiper('#mySwiper', {
  modules: [Pagination, Autoplay],
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  mousewheel: {
    thresholdDelta: 70,
  },
  spaceBetween: 30,
  loop: true,
});
