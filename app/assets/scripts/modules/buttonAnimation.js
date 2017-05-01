/* JS For Button Animations */
const getInTouchButton = document.querySelector('.reserve-email-link a');
const contactButton = document.querySelector('.reserve-description a');
const faceButton = document.querySelector('.find-a-table .face-button .face-primary');
const subscribeButton = document.querySelector('.newsletter-form-field-wrapper .face-button .face-primary');

export function clickContactButton() {
	contactButton.style.transition = 'all 0.3s ease';
	contactButton.textContent = 'CONTACT US!';
	contactButton.style.cssText = "color: firebrick; background: antiquewhite; border: 3px dotted black; padding: 10px; text-decoration: none; box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5), 1px 1px 2px rgba(0, 0, 0, 0.5), 1px 1px 2px rgba(0, 0, 0, 0.5), 1px 1px 2px rgba(0, 0, 0, 0.5) inset;";
}

export function clickEmailUsButton() {
	getInTouchButton.style.transition = 'all 0.3s ease';
	getInTouchButton.textContent = 'EMAIL US!';
	getInTouchButton.style.cssText = "color: firebrick; background: antiquewhite; border: 3px dotted black; padding: 10px; text-decoration: none; box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5), 1px 1px 2px rgba(0, 0, 0, 0.5), 1px 1px 2px rgba(0, 0, 0, 0.5), 1px 1px 2px rgba(0, 0, 0, 0.5) inset;";
}

export function clickFaceButton() {
	if(faceButton.classList.contains('face-primary')) {
		faceButton.remove('face-primary');
		faceButton.add('face-secondary');
	} else {
		faceButton.add('face-primary');
		faceButton.remove('face-secondary');
	}
}

export function clickSubscribeButton() {
	if(subscribeButton.classList.contains('face-primary')) {
		subscribeButton.remove('face-primary');
		subscribeButton.add('face-secondary');
	} else {
		subscribeButton.add('face-primary');
		subscribeButton.remove('face-secondary');
	}
}


subscribeButton.addEventListener('click', clickSubscribeButton);
faceButton.addEventListener('click', clickFaceButton);
getInTouchButton.addEventListener('click', clickEmailUsButton);
contactButton.addEventListener('click', clickContactButton);
