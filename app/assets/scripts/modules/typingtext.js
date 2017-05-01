/* Typing Text Effect Welcome Page */

document.addEventListener('DOMContentLoaded', (event) => {
	const dataText = ["Welcome", "to Julia's", "Restaurant", "Come Visit", "and Enjoy", "the", "Experience", "... Today!"];
	/* type one text string. keeps calling itself until all text strings completed */
	function typeWriter(text, i, callback) {
		// check if text is finished typing
		if(i < text.length) {
			// add next character to h1 element
			document.querySelector('.welcome-title').innerHTML = text.substring(0, i+1);
			// pause and then call function again for next character
			setTimeout(() => {
				typeWriter(text, i+1, callback)
			}, 100);
				/* text complete, call callback function if there is a callback function */
		} else if(typeof callback === 'function') {
			// call callback after timeout
			setTimeout(callback, 500);
		}
	}
	// start typewriter animation for text in dataText array
	function startTextAnimation(i) {
		if(typeof dataText[i] === 'undefined') {
			setTimeout(() => {
				startTextAnimation(0);
			}, 500);
		}
		// check if dataText[i] exists
		if(i < dataText[i].length) {
			// text exists. start typewriter animation
			typeWriter(dataText[i], 0, () => {
				/* after callback (and whole text has been animated), start
				new text */
				startTextAnimation(i + 1);
			});
		}
	}
	// start the text animation
	startTextAnimation(0);
});

/* Typing Text Effect About Page */

document.addEventListener('DOMContentLoaded', (event) => {
	const dataText = ["Learn About", "the Story", "Behind", "the Place", "Be Enticed", "to Visit", "... Today!"];
	/* type one text string. keeps calling itself until all text strings completed */
	function typeWriter(text, i, callback) {
		// check if text is finished typing
		if(i < text.length) {
			// add next character to h1 element
			document.querySelector('.about-title').innerHTML = text.substring(0, i+1);
			// pause and then call function again for next character
			setTimeout(function() {
				typeWriter(text, i+1, callback)
			}, 100);
				/* text complete, call callback function if there is a callback function */
		} else if(typeof callback === 'function') {
			// call callback after timeout
			setTimeout(callback, 500);
		}
	}
	// start typewriter animation for text in dataText array
	function startTextAnimation(i) {
		if(typeof dataText[i] === 'undefined') {
			setTimeout(function() {
				startTextAnimation(0);
			}, 500);
		}
		// check if dataText[i] exists
		if(i < dataText[i].length) {
			// text exists. start typewriter animation
			typeWriter(dataText[i], 0, () => {
				/* after callback (and whole text has been animated), start
				new text */
				startTextAnimation(i + 1);
			});
		}
	}
	// start the text animation
	startTextAnimation(0);
});

/* Typing Text Effect Reservation Page */

document.addEventListener('DOMContentLoaded', (event) => {
	const dataText = ["Make", "a Reservation", "At Julia's", "Ensure", "Your Table",  "... Today!"];
	/* type one text string. keeps calling itself until all text strings completed */
	function typeWriter(text, i, callback) {
		// check if text is finished typing
		if(i < text.length) {
			// add next character to h1 element
			document.querySelector('.reserve-title').innerHTML = text.substring(0, i+1);
			// pause and then call function again for next character
			setTimeout(() => {
				typeWriter(text, i+1, callback)
			}, 100);
				/* text complete, call callback function if there is a callback function */
		} else if(typeof callback === 'function') {
			// call callback after timeout
			setTimeout(callback, 500);
		}
	}
	// start typewriter animation for text in dataText array
	function startTextAnimation(i) {
		if(typeof dataText[i] === 'undefined') {
			setTimeout(function() {
				startTextAnimation(0);
			}, 500);
		}
		// check if dataText[i] exists
		if(i < dataText[i].length) {
			// text exists. start typewriter animation
			typeWriter(dataText[i], 0, () => {
				/* after callback (and whole text has been animated), start
				new text */
				startTextAnimation(i+1);
			});
		}
	}
	// start the text animation
	startTextAnimation(0);
});

/* Typing Text Effect Buzz Page */

document.addEventListener('DOMContentLoaded', (event) => {
	const dataText = ["Read All", "the Buzz", "About Julia's", "Then Pay Us", "a Visit", "... Today!"];
	/* type one text string. keeps calling itself until all text strings completed */
	function typeWriter(text, i, callback) {
		// check if text is finished typing
		if(i < text.length) {
			// add next character to h1 element
			document.querySelector('.buzz-title').innerHTML = text.substring(0, i+1);
			// pause and then call function again for next character
			setTimeout(function() {
				typeWriter(text, i+1, callback)
			}, 100);
				/* text complete, call callback function if there is a callback function */
		} else if(typeof callback === 'function') {
			// call callback after timeout
			setTimeout(callback, 500);
		}
	}
	// start typewriter animation for text in dataText array
	function startTextAnimation(i) {
		if(typeof dataText[i] === 'undefined') {
			setTimeout(() => {
				startTextAnimation(0);
			}, 500);
		}
		// check if dataText[i] exists
		if(i < dataText[i].length) {
			// text exists. start typewriter animation
			typeWriter(dataText[i], 0, () => {
				/* after callback (and whole text has been animated), start
				new text */
				startTextAnimation(i + 1);
			});
		}
	}
	// start the text animation
	startTextAnimation(0);
});
