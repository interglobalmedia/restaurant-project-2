const icon = document.querySelector('.hamburger');

function transformIcon() {
	const responsivemenu = document.querySelector('.top');
	const lines = document.querySelectorAll('.line');
	lines[0].classList.toggle('animate0');
	lines[1].classList.toggle('hide');
	lines[2].classList.toggle('animate2');
	responsivemenu.classList.toggle('show');
}

icon.addEventListener('click', transformIcon);

module.exports.transformIcon = transformIcon;
