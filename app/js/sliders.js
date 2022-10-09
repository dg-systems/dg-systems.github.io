import './plugins/fullpage.js';

import Swiper, { Controller, Navigation, Pagination, Mousewheel } from 'swiper';
import { animateSection } from './animations.js';

const productInfoSlider = new Swiper('.product__info-slider', {
  direction: 'vertical',
  watchSlidesProgress: true,
  modules: [Controller, Navigation],
  controller: {
    inverse: true,
  },
  navigation: {
    nextEl: '.product-slider-next',
    prevEl: '.product-slider-prev',
  },
});

const productItemsSlider = new Swiper('.product__items-slider', {
  direction: 'vertical',
  watchSlidesProgress: true,
  modules: [Controller],
  grabCursor: true,
  controller: {
    inverse: true,
  },
});
const newsSlider = new Swiper('.news-slider', {
  modules: [Mousewheel],
  mousewheel: true,
  direction: 'vertical',
  mousewheel: {
    invert: false,
  },
});

const productMobileSlider = new Swiper('.product-mobile__slider', {
  spaceBetween: 1,
  modules: [Pagination, Navigation],
  loop: true,
  navigation: {
    nextEl: '.product-mobile__slider-navigationNext',
    prevEl: '.product-mobile__slider-navigationPrev',
  },
  pagination: {
    el: '.product-mobile__slider-pagination',
    type: 'bullets',
  },
});

const newsMobileSlider = new Swiper('.news-mobile__slider', {
  spaceBetween: 1,
  modules: [Pagination, Navigation],
  loop: true,
  navigation: {
    nextEl: '.news-mobile__slider-navigationNext',
    prevEl: '.news-mobile__slider-navigationPrev',
  },
  pagination: {
    el: '.news-mobile__slider-pagination',
    type: 'bullets',
  },
});

export const pageSlider = new fullpage('#fullpage', {
  autoScrolling: true,
  scrollHorizontally: true,

  onLeave: function (_a, _b, direction) {
    newsFunction(this.anchor, direction);
  },
  afterLoad: function () {
    animateSection(this.anchor);
  },
});

function newsFunction(section, direction) {
  if (window.innerWidth > 800) {
    if (section === 'product' && direction === 'down') {
      pageSlider.setAllowScrolling(false);
      pageSlider.setAllowScrolling(false, 'down');
      newsSlider.on('slideChange', (e) => {
        e.activeIndex === 2 && setTimeout(() => pageSlider.setAllowScrolling(true), 300);
      });
    }

    if (section === 'contacts') {
      pageSlider.setAllowScrolling(false);
      newsSlider.on('slideChange', (e) => {
        e.activeIndex === 0 && setTimeout(() => pageSlider.setAllowScrolling(true), 300);
      });
    }
  }
}

productInfoSlider.controller.control = productItemsSlider;
productItemsSlider.controller.control = productInfoSlider;
