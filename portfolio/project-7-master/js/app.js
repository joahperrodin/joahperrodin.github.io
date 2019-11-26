document.addEventListener('DOMContentLoaded', () => {
	const qwerty = document.getElementById('qwerty');
	const phrase = document.getElementById('phrase');
	let missed = 0;
	const startButton = document.querySelector('a');
	const ul = phrase.firstElementChild;

	const phrases = [
		'So say we all',
		'Time And Relative Dimension In Space',
		'Undomesticated equines could not keep me away',
		'These are not the Droids you are looking for',
		'There is nothing permanent except change',
		'A man can be destroyed but not defeated',
		'Learning never exhausts the mind',
		'There is no charm equal to tenderness of heart',
		'Being entirely honest with oneself is a good exercise',
		'Honesty is the first chapter in the book of wisdom',
		'Not all who wander are lost'
	];

	// Take a given array and split it's string into a new array of individual characters

	function getRandomPhraseAsArray(arr) {
		const rand = arr[Math.floor(Math.random() * arr.length)];
		return rand;
	}

	function splitRandomPhrase(arr) {
		const arrayOfCharacters = arr.split('');
		console.log(arrayOfCharacters);
		return arrayOfCharacters;
	}

	// Take the array and spit each word into a li and add it to the DOM

	function addPhraseToDisplay(arr) {
		for (let i = 0; i < arr.length; i++) {
			const char = arr[i];
			const li = document.createElement('li');
			li.textContent = char;
			if (li.textContent === ' ') {
				li.className = 'space';
			} else {
				li.className = 'letter';
			}
			ul.appendChild(li);
		}
	}

	// Check the user's button press against the given phrase. Reveal the letter if correct, return null if incorrect

	function checkLetter(clickedButton) {
		const letters = document.getElementsByClassName('letter');
		let letterFound = null;
		for (let i = 0; i < letters.length; i += 1) {
			if (clickedButton === letters[i].textContent.toLowerCase()) {
				letters[i].classList.add('show');
				letters[i].classList.add('color');
				letters[i].style.transition = 'all 1.5s';
				letters[i].style.backgroundColor = '#5b85b7';
				letters[i].style.color = 'white';
				letterFound = true;
			}
		}
		return letterFound;
	}

	// remove score function

	function changeScore() {
		let scoreboardList = document.querySelector('ol');
		let heart = scoreboardList.querySelector('li:first-child'); // find first heart item
		scoreboardList.removeChild(heart);
	}

	// Create new element

	function addElement(winOrLose, text1, text2) {
		// create a new div element
		let element = document.createElement('div');
		element.className = winOrLose;
		element.id = 'overlay';
		let newH2 = element.appendChild(document.createElement('h2'));
		newH2.className = 'title';
		newH2.style.margin = '0 auto';
		newH2.textContent = text1;
		let firstH3 = element.appendChild(document.createElement('h3'));
		firstH3.className = 'title';
		firstH3.style.margin = '0 auto';
		firstH3.textContent = text2;
		let reloadButton = element.appendChild(document.createElement('a'));
		reloadButton.className = 'btn__reset';
		reloadButton.textContent = 'Try Again';
		reloadButton.setAttribute('href', 'javascript:location.reload(true)');
		document.body.appendChild(element);
	}

	// Check win condition

	function checkWin() {
		let showClass = document.getElementsByClassName('show');
		let lettersClass = document.getElementsByClassName('letter');
		if (showClass.length == lettersClass.length && showClass.length > 0) {
			console.log('you win');
			addElement('win', `You Win!`, `"${phraseArray}" is correct! `);
		} else if (missed == 5) {
			console.log('you lose');
			addElement('lose', 'Game Over!', 'Better luck next time!');
		}
	}

	// Hide the start screen when 'Start Game' is clicked

	startButton.addEventListener('click', () => {
		const startScreen = document.getElementById('overlay');
		if (startScreen.style.display === 'none') {
			startScreen.style.display = 'block';
		} else {
			startScreen.style.display = 'none';
		}
	});

	//  Randomly select an Array, then add the phrase from the array to the DOM

	const phraseArray = getRandomPhraseAsArray(phrases);
	const splitArray = splitRandomPhrase(phraseArray);
	addPhraseToDisplay(splitArray);

	// Listen to the user's key presses

	qwerty.addEventListener('click', (e) => {
		if (e.target.matches('button')) {
			const button = e.target;
			const buttonText = button.textContent;
			if (checkLetter(buttonText) == null) {
				missed += 1;
				changeScore();
				button.classList.add('chosen');
				button.disabled = true;
			} else {
				button.classList.add('chosen');
				button.disabled = true;
			}
			checkWin();
		}
	});
});
