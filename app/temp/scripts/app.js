/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.transformIcon = transformIcon;
var icon = document.querySelector('.hamburger');

function transformIcon() {
	var responsivemenu = document.querySelector('.responsive-menu');
	var lines = document.querySelectorAll('.line');
	lines[0].classList.toggle('animate0');
	lines[1].classList.toggle('hide');
	lines[2].classList.toggle('animate2');
	responsivemenu.classList.toggle('show');
}

icon.addEventListener('click', transformIcon);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.debounce = debounce;
exports.checkSlide = checkSlide;
/* pass a debounce function and it willrun debounce all the time when on scroll, but will only run the function checkSlide() once every 20 ms. This way prevents hurtful performance of too many eventsbeing fired on scroll. */

function debounce(func) {
	var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
	var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

	var timeout = void 0;
	return function () {
		var context = this;
		var args = arguments;
		var later = function later() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

/* select all images going to listen for */

var sliderImages = document.querySelectorAll('.zoom-in');

// function will run every time person scrolls

function checkSlide(e) {
	/* loop over every single image and then figure out where the image needs to be shown.  When the image is shown about 50% of its height on page, that's when we want to animate it on in. */
	sliderImages.forEach(function (sliderImage) {
		/* this gives the pxiel number of height location at bottom of (viewable) viewport. Halfway through the image. */
		var zoomInAt = window.scrollY + window.innerHeight - sliderImage.height / 2;
		// bottom of the image
		var imageBottom = sliderImage.offsetTop + sliderImage.height;
		var isHalfShown = zoomInAt > sliderImage.offsetTop;
		var isNotScrolledPast = window.scrollY < imageBottom;
		if (isHalfShown && isNotScrolledPast) {
			sliderImage.classList.add('active');
		} else {
			sliderImage.classList.remove('active');
		}
	});
}

/* wrapping checkSlide in debounce and attachin an event listener to debounce contains number of scroll events that are fired. Much lower now. Any time you are doing something on scroll, you want to think about adding a debounce function to control firing of the event. Make sure to debounce your scroll functions. */

window.addEventListener('scroll', debounce(checkSlide));

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _responsiveNav = __webpack_require__(0);

var _zoomin = __webpack_require__(1);

/* Resposnive Nav */

var icon = document.querySelector('.hamburger');

icon.addEventListener('click', _responsiveNav.transformIcon);

/* Zoom In Images */

var sliderImages = document.querySelectorAll('.zoom-in');

window.addEventListener('scroll', (0, _zoomin.debounce)(_zoomin.checkSlide));

/***/ })
/******/ ]);