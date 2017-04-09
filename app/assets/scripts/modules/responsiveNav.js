import $ from 'jquery';
/* Slide in From Side Responsive Nav */
const icon = document.querySelector('.hamburger');

export function transformIcon() {
	const responsivemenu = document.querySelector('.responsive-menu');
	const lines = document.querySelectorAll('.line');
	lines[0].classList.toggle('animate0');
	lines[1].classList.toggle('hide');
	lines[2].classList.toggle('animate2');
	responsivemenu.classList.toggle('show');
}

icon.addEventListener('click', transformIcon);
