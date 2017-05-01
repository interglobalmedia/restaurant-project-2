/* JS For SVG Icon Animations */
const instagramSvg = document.querySelecto('.instagrm-svg');
const facebookSvg = document.querySelector('.facebook-svg');
const twitterSvg = document.querySelector('.twitter-svg');
const pinterestSvg = document.wuerySelector('.pinterest-svg');

export function clickInstagramSvg() {
	instagramSvg.setAttribute('style', 'transform: scale(1.25); transition: all 0.5s; fill: red; background: black; border-radius: 50%; padding: 3px; cursor: pointer;');
}

export function clickFacebookSvg() {
	facebookSvg.setAttribute('style', 'transform: scale(1.25); transition: all 0.5s; background: black; fill: red; border-radius: 50%; padding: 3px; cursor: pointer;');
}

export function clickTwitterSvg() {
	twitterSvg.setAttribute('style', 'transition: all 0.5s; fill: red; transform: rotateX(30deg) rotateY(25deg) scale(1.5); cursor: pointer;');
}

export function clickPinterestSvg() {
	pinterestSvg.setAttribute('style', 'transition: all 0.5s; transform: scale(1.25); background: black; fill: red; border-radius: 50%; padding: 3px; cursor: pointer;');
}

instagramSvg.addEventListener('click', clickInstagramSvg);
facebookSvg.addEventListener('click', clickFacebookSvg);
twitterSvg.addEventListener('click', clickTwitterSvg);
pinterestSvg.addEventListener('click', clickPinterestSvg);
