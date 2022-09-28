import './sliders.js';
import './form.js';

import { isWebp } from './utills.js';
isWebp();

export const pageSectionNames = ['home', 'about', 'product', 'news', 'contacts'];
export const $pageSections = pageSectionNames.map((sectionName) =>
  document.querySelector(`[data-anchor="${sectionName}"]`),
);
