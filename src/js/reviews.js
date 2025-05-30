import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import spriteUrl from '../img/sprite.svg';

import { reviews } from './data/reviews.js';

const generateStars = count => {
  return Array.from(
    { length: count },
    () => `
      <li>
        <svg width="20" height="20">
          <use href="${spriteUrl}#icon-star"></use>
        </svg>
      </li>
    `
  ).join('');
};
Swiper.use([Navigation, Pagination, Scrollbar, Autoplay]);

const container = document.querySelector('.swiper-wrapper');

const listItems = reviews
  .map((review, index) => {
    return `
      <ul class="swiper-slide">
        <li class="list-item" data-id="${index}">
          <p class="review-text">"${review.review}"</p>
          <div class="reviewer-info">
            <ul class="reviewer-rating-list">
              ${generateStars(review.rating)}
            </ul>
            <p class="review-name-text">${review.username}</p>
          </div>
        </li>
      </ul>
    `;
  })
  .join('');

container.innerHTML = listItems;

new Swiper('.swiper', {
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
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
