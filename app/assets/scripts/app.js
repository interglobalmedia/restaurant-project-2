/* Resposnive Nav */

const icon = document.querySelector('.hamburger');

import { transformIcon } from './modules/responsiveNav';

icon.addEventListener('click', transformIcon);

/* Zoom In Images */

import { debounce, checkSlide } from './modules/zoomin';

const sliderImages = document.querySelectorAll('.zoom-in');

window.addEventListener('scroll', debounce(checkSlide));

/* JS For Button Animations */
import { clickEmailUsButton, clickContactButton, clickFaceButton, clickSubscribeButton } from './modules/buttonAnimation';

const getInTouchButton = document.querySelector('.reserve-email-link a');
const contactButton = document.querySelector('.contact-us a');
const faceButton = document.querySelector('.find-a-table .face-button .face-primary');
const subscribeButton = document.querySelector('.newsletter-form-field-wrapper .face-button .face-primary');

subscribeButton.addEventListener('click', clickSubscribeButton);
faceButton.addEventListener('click', clickFaceButton);
getInTouchButton.addEventListener('click', clickEmailUsButton);
contactButton.addEventListener('click', clickContactButton);
