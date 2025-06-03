import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

let featuresSwiper;

const screenWidthQuery = window.matchMedia('(max-width: 1199.98px)');

function initFeaturesSwiper() {
  if (screenWidthQuery.matches && !featuresSwiper) {
    featuresSwiper = new Swiper('#game-features-swiper', {
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
      },
    });
  } else if (!screenWidthQuery.matches && featuresSwiper) {
    featuresSwiper.destroy(true, true);
    featuresSwiper = null;
  }
}

initFeaturesSwiper();
screenWidthQuery.addEventListener('change', initFeaturesSwiper);
