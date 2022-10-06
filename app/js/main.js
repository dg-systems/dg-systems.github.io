import { pageSlider } from './sliders.js';
import './modals.js';
import './form.js';

import { isWebp } from './utills.js';
isWebp();

// global variables
export const pageSectionNames = ['home', 'about', 'product', 'news', 'contacts'];
export const $pageSections = pageSectionNames.map((sectionName) =>
  document.querySelector(`[data-anchor="${sectionName}"]`),
);

const $stylesLink = document.head.querySelector('[data-stylesheet]');

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
};

['orentationchange', 'resize', 'load'].forEach((method) =>
  window.addEventListener(method, (e) => {
    documentHeight();

    window.innerWidth <= 800
      ? $stylesLink.setAttribute('href', 'css/style-mobile.min.css')
      : $stylesLink.setAttribute('href', 'css/style.min.css');
  }),
);

const $burgerButton = document.querySelector('.header__mobile-burger');
const $headerMobile = document.querySelector('.header-mobile');
let flag = false;

const toggleMobileHeader = () => {
  $burgerButton.classList.toggle('active');
  $headerMobile.classList.toggle('active');

  pageSlider.setAllowScrolling(flag);
  flag = !flag;
};

$burgerButton.addEventListener('click', toggleMobileHeader);
document.querySelector('.header-mobile__links').addEventListener('click', (e) => {
  if (e.target.closest('.header-mobile__link')) {
    $burgerButton.classList.toggle('active');
    $headerMobile.classList.toggle('active');

    flag = true;
    pageSlider.setAllowScrolling(flag);
  }
});
