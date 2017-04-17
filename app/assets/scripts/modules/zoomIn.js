/* pass a debounce function and it willrun debounce all the time when on scroll, but will only run the function checkSlide() once every 20 ms. This way prevents hurtful performance of too many eventsbeing fired on scroll. */

export function debounce(func, wait = 20, immediate = true) {
	let timeout;
	return function() {
		const context = this;
		const args = arguments;
		const later = () => {
			timeout = null;
			if(!immediate)
				func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if(callNow)
			func.apply(context, args);
	};
}

/* select all images going to listen for */

const sliderImages = document.querySelectorAll('.zoom-in');

// function will run every time person scrolls

export function checkSlide(e) {
	/* loop over every single image and then figure out where the image needs to be shown.  When the image is shown about 50% of its height on page, that's when we want to animate it on in. */
	sliderImages.forEach(sliderImage => {
		/* this gives the pxiel number of height location at bottom of (viewable) viewport. Halfway through the image. */
		const zoomInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
		// bottom of the image
		const imageBottom = sliderImage.offsetTop + sliderImage.height;
		const isHalfShown = zoomInAt > sliderImage.offsetTop;
		const isNotScrolledPast = window.scrollY < imageBottom;
		if(isHalfShown && isNotScrolledPast) {
			sliderImage.classList.add('active');
		} else {
			sliderImage.classList.remove('active');
		}
	});
}

/* wrapping checkSlide in debounce and attachin an event listener to debounce contains number of scroll events that are fired. Much lower now. Any time you are doing something on scroll, you want to think about adding a debounce function to control firing of the event. Make sure to debounce your scroll functions. */

window.addEventListener('scroll', debounce(checkSlide));
