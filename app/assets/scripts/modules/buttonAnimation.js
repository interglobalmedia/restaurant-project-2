/* JS For Button Animations */
const getInTouchButton = document.querySelector('.reserve-email-link a');
const contactButton = document.querySelector('.contact-us a');
const faceButton = document.querySelector('.find-a-table .face-button .face-primary');
const subscribeButton = document.querySelector('.newsletter-form-field-wrapper .face-button .face-primary');

export function clickEmailUsButton() {
	getInTouchButton.style.transition = 'all 0.3s ease';
	getInTouchButton.textContent = 'EMAIL US!';
	getInTouchButton.style.cssText = "color: firebrick; background: antiquewhite; border: 3px dotted black; padding: 10px; text-decoration: none; box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5), 1px 1px 2px rgba(0, 0, 0, 0.5), 1px 1px 2px rgba(0, 0, 0, 0.5), 1px 1px 2px rgba(0, 0, 0, 0.5) inset;";
}

export function clickContactButton() {
	contactButton.style.transition = 'all 0.3s ease';
	contactButton.textContent = 'CONTACT US!';
	contactButton.style.cssText = "color: firebrick; background: antiquewhite; border: 3px dotted black; padding: 10px; text-decoration: none; box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5), 1px 1px 2px rgba(0, 0, 0, 0.5), 1px 1px 2px rgba(0, 0, 0, 0.5), 1px 1px 2px rgba(0, 0, 0, 0.5) inset;";
}

export function clickFaceButton() {
	if(faceButton.classList.contains('face-primary')) {
		faceButton.classList.remove('face-primary');
		faceButton.classList.add('face-secondary');
	} else {
		faceButton.classList.add('face-primary');
		faceButton.classList.remove('face-secondary');
	}
}

export function clickSubscribeButton() {
	if(subscribeButton.classList.contains('face-primary')) {
		subscribeButton.classList.remove('face-primary');
		subscribeButton.classList.add('face-secondary');
	} else {
		subscribeButton.classList.add('face-primary');
		subscribeButton.classList.remove('face-secondary');
	}
}


subscribeButton.addEventListener('click', clickSubscribeButton);
faceButton.addEventListener('click', clickFaceButton);
getInTouchButton.addEventListener('click', clickEmailUsButton);
contactButton.addEventListener('click', clickContactButton);
