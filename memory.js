const gameContainer = document.getElementById('game');
const startGame = document.getElementById('start');
const endGame = document.getElementById('end');

const COLORS = [
	'red',
	'blue',
	'green',
	'orange',
	'purple',
	'red',
	'blue',
	'green',
	'orange',
	'purple',
];

function shuffle(array) {
	let counter = array.length;
	while (counter > 0) {
		// Pick a random index
		let index = Math.floor(Math.random() * counter);

		// Decrease counter by 1
		counter--;

		// And swap the last element with it
		let temp = array[counter];
		array[counter] = array[index];
		array[index] = temp;
	}

	return array;
}

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
	for (let color of colorArray) {
		// create a new div
		const newDiv = document.createElement('div');

		// give it a class attribute for the value we are looping over
		newDiv.classList.add(color);

		// call a function handleCardClick when a div is clicked on
		newDiv.addEventListener('click', handleCardClick);

		// append the div to the element with an id of game
		gameContainer.append(newDiv);
	}
}

let cardsFlipped = 0;
let noClick = false;
let firstCard = null;
let secondCard = null;

// TODO: Implement this function!
function handleCardClick(e) {
	// let currentDiv = e.target;
	//console.log(currentDiv);
	if (noClick === true) {
		//console.log('noClicking');
		return;
	} else {
		if (e.target.classList.contains('isClicked'))
			//console.log('You cannot click this card');
			return;
	}
	let currentDiv = e.target;
	currentDiv.style.backgroundColor = currentDiv.classList[0];
	console.log('Color is changed');

	if (!firstCard || !secondCard) {
		currentDiv.classList.add('isClicked');
		firstCard = firstCard || currentDiv;
		secondCard = currentDiv === firstCard ? null : currentDiv;
	}

	if (firstCard && secondCard) {
		noClick = true;
		console.log('two have been chosen');
		let colorOne = firstCard.className;
		let colorTwo = secondCard.className;

		if (colorOne === colorTwo) {
			console.log("It's a match");
			cardsFlipped += 2;
			firstCard.removeEventListener('click', handleCardClick);
			secondCard.removeEventListener('click', handleCardClick);
			firstCard = null;
			secondCard = null;
			noClick = false;
		} else {
			setTimeout(function () {
				firstCard.style.backgroundColor = '';
				secondCard.style.backgroundColor = '';
				firstCard.classList.remove('isClicked');
				secondCard.classList.remove('isClicked');
				firstCard = null;
				secondCard = null;
				noClick = false;
			}, 2000);
		}
	}
	if (cardsFlipped === COLORS.length) {
		alert('Game Over, great job');
	}
}

createDivsForColors(shuffledColors);
