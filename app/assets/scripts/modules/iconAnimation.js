/* JS For SVG Icon Animations */
const instagramSvg = document.querySelector('.instagrm-svg');
const facebookSvg = document.querySelector('.facebook-svg');
const twitterSvg = document.querySelector('.twitter-svg');
const pinterestSvg = document.querySelector('.pinterest-svg');

export function clickInstagramIcon() {
	instagramSvg.setAttribute('style', 'background: black; fill: red; border-radius: 50%; transition: all 0.5 ease; transform: scale(1.25); padding: 3px; cursor: pointer;');
}

export function clickFacebookIcon() {
	facebookSvg.setAttribute('style', 'background: black; fill: red; border-radius: 50%; padding: 3px; transform: scale(1.25); transition: all 0.5s; cursor: pointer;');
}

export function clickTwitterIcon() {
	twitterSvg.setAttribute('style', 'transition: all 0.5s; cursor: pointer; fill: red; transform: rotateX(30deg) rotateY(25deg) scale(1.5);');
}

export function clickPinterestIcon() {
	pinterestSvg.setAttribute('style', 'transform: scale(1.25); transition: all 0.5s; cursor: pointer; background: black; fill: red; border-radius: 50%; padding: 3px;');
}

instagramSvg.addEventListener('click', clickInstagramIcon);
facebookSvg.addEventListener('click', clickFacebookIcon);
twitterSvg.addEventListener('click', clickTwitterIcon);
pinterestSvg.addEventListener('click', clickPinterestIcon);
