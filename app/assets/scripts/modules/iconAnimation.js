/* JS For SVG Icon Animations */
const instagramSvg = document.querySelector('svg .instagrm-svg');
const facebookSvg = document.querySelector('.facebook-svg');
const twitterSvg = document.querySelector('.twitter-svg');
const pinterestSvg = document.querySelector('.pinterest-svg');

export function clickInstagramSvg(e) {
	const socialInstSvg = e.target;
	socialInstSvg.setAttribute('style', 'transform: scale(1.25); transition: all 0.5s; fill: red; border-radius: 50%; padding: 3px; cursor: pointer; margin-right: 20px;');
}

export function clickFacebookSvg(e) {
	const socialFbSvg = e.target;
	socialFbSvg.setAttribute('style', 'transform: scale(1.25); transition: all 0.5s; background: black; fill: red; border-radius: 50%; padding: 3px; cursor: pointer; margin-right: 20px;');
}

export function clickTwitterSvg(e) {
	const socialTwitterSvg = e.target;
	socialTwitterSvg.setAttribute('style', 'transition: all 0.5s; fill: red; transform: rotateX(30deg) rotateY(25deg) scale(1.5); cursor: pointer; margin-right: 20px;');
}

export function clickPinterestSvg(e) {
	const socialPintSvg = e.target;
	socialPintSvg.setAttribute('style', 'transition: all 0.5s; transform: scale(1.25); background: black; fill: red; border-radius: 50%; padding: 3px; cursor: pointer;');
}

instagramSvg.addEventListener('click', clickInstagramSvg);
facebookSvg.addEventListener('click', clickFacebookSvg);
twitterSvg.addEventListener('click', clickTwitterSvg);
pinterestSvg.addEventListener('click', clickPinterestSvg);
