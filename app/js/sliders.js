import './plugins/fullpage.js';

import Swiper, { Controller, Navigation, Mousewheel } from 'swiper';
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
  direction: 'vertical',
  modules: [Mousewheel],
  mousewheel: {
    invert: false,
  },
});

const pageSlider = new fullpage('#fullpage', {
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
  if (section === 'product' && direction === 'down') {
    pageSlider.setAllowScrolling(false);
    // pageSlider.setAllowScrolling(false, 'down');
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

productInfoSlider.controller.control = productItemsSlider;
productItemsSlider.controller.control = productInfoSlider;
