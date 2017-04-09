import $ from 'jquery';

/* Variable for Resposnive Nav */

const icon = document.querySelector('.hamburger');

import { transformIcon } from './modules/responsiveNav';

icon.addEventListener('click', transformIcon);
