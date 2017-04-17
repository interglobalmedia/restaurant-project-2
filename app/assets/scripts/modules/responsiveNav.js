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

export function welcomeExpand() {
	const responsivemenu = document.querySelector('.responsive-menu');
	const lines = document.querySelectorAll('.line');
	const welcome = document.querySelector('#welcome');
	lines[0].classList.toggle('animate0');
	lines[1].classList.toggle('hide');
	lines[2].classList.toggle('animate2');
	responsivemenu.classList.toggle('show');
}
