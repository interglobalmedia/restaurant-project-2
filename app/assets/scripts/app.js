/* Resposnive Nav */

const icon = document.querySelector('.hamburger');

import { transformIcon } from './modules/responsiveNav';

icon.addEventListener('click', transformIcon);

/* Zoom In Images */

import { debounce, checkSlide } from './modules/zoomin';

const sliderImages = document.querySelectorAll('.zoom-in');

window.addEventListener('scroll', debounce(checkSlide));
