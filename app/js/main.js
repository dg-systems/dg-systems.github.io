import Swiper, { Controller, Navigation } from 'swiper';
import './plugins/fullpage.js';

import { isWebp } from './utills.js';
isWebp();

const pageSlider = new fullpage('#fullpage', {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
});

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
  controller: {
    inverse: true,
  },
});

productInfoSlider.controller.control = productItemsSlider;
productItemsSlider.controller.control = productInfoSlider;
