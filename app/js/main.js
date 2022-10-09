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

const toggleMobileHeader = () => {
  if ($burgerButton.classList.contains('active')) {
    $burgerButton.classList.remove('active');
    $headerMobile.classList.remove('active');

    pageSlider.setAllowScrolling(true);
  } else {
    $burgerButton.classList.add('active');
    $headerMobile.classList.add('active');

    pageSlider.setAllowScrolling(false);
  }
};

$burgerButton.addEventListener('click', toggleMobileHeader);
document.querySelector('.header-mobile__links').addEventListener('click', (e) => {
  if (e.target.closest('.header-mobile__link')) {
    $burgerButton.classList.remove('active');
    $headerMobile.classList.remove('active');

    pageSlider.setAllowScrolling(true);
  }
});
