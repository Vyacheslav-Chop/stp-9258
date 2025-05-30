import Swiper from 'swiper';

import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectCoverflow,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay]);

const swiper = new Swiper('.mySwiper', {
  modules: [Pagination, Autoplay],
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
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
