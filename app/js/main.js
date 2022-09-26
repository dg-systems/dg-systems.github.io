import './plugins/fullpage.js';

import { isWebp } from './utills.js';
isWebp();

const pageSlider = new fullpage('#fullpage', {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
});
