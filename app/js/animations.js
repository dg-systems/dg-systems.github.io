import $ from 'jquery';
import { $pageSections } from './main.js';

function clearAnimations() {
  $pageSections.forEach(($section) => {
    $section
      .querySelectorAll('.animation-item.active')
      .forEach(($item) => $item.classList.remove('active'));
  });
}

export function animateSection(section) {
  // clearAnimations();
}
