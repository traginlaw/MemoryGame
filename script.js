//document.addEventListener('DomContentLoaded',
const gameContainer = document.getElementById('game');
const startGame = document.getElementById('start');
const endGame = document.getElementById('end');
const divs = document.getElementsByTagName('div');
//const card = document.getElementsByClassName('card');

let firstCard = null;
let secondCard = null;
let cardsFlipped = 0;
let noClick = false;

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

//let cards = [];
//cards.length = Math.min(cards.length, 5);
// let firstCard, secondCard;
// let isClicked = false;

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want  research more
function shuffle(array) {
	let counter = array.length;

	// While there are elements in the array
	while (counter > 0) {
		// Pick a random index
		let index = Math.floor(Math.random() * counter);

		// Decrease counter by 1
		counter--;

		// And swap the last element with it
		let temp = array[counter];
		array[counter] = array[index];
		array[index] = temp;
		//console.log(temp);
		//console.log(array[counter]);
		//console.log(array[index]);
	}

	return array;
}

let shuffledColors = shuffle(COLORS);
//console.log(shuffledColors);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
	for (let color of colorArray) {
		// create a new div
		const newDiv = document.createElement('div');

		// give it a class attribute for the value we are looping over
		newDiv.classList.add(color);
		//newDiv.setAttribute('isClicked', 'isClicked');
		// newDiv.classList.add(front);
		// newDiv.classList.add(back);
		//newDiv.style.display = 'block';
		//newDiv.classList.hidden;
		// newDiv.classList.add(card)
		//newDiv.css(border, 10px solid black);

		// call a function handleCardClick when a div is clicked on
		newDiv.addEventListener('click', handleCardClick);

		// append the div to the element with an id of game
		gameContainer.append(newDiv);
		//console.log();
	}
}

// TODO: Implement this function!
function handleCardClick(e) {
	if (noClick) return;
	if (e.target.classList.contains('isClicked')) return;
	let currentDiv = e.target;
	currentDiv.classList.toggle('isClicked');
	const hasClass = e.target.classList.contains('isClicked');
	const className = currentDiv.className.split(' ')[0];
	if (hasClass) {
		console.log('Has class');
		currentDiv.style.backgroundColor = className;
	} else {
		if ((e.target.backgroundColor = className)) {
			e.target.style.backgroundColor = '';

			// if (firstCard || secondCard) {
			// 	currentDiv.classList.add('isClicked');
			// }

			//let cardsArray = [];
			// if (noClick) return;
			// if (e.target.classList.contains('isClicked')) return;
			// for (let i = 0; i <= 2; i++) {
			//let firstCard, secondCard;
			// let isClicked = false;
			// if (isClicked === true) {
			// 	return;
			// } else {
			//console.log(e);
			//console.log(e.target);
			// firstCard = currentDiv;
			// let currentDiv = e.target;
			// currentDiv.classList.toggle('isClicked');
			// const hasClass = e.target.classList.contains('isClicked');
			// const className = currentDiv.className.split(' ')[0];
			//cards.push(className);
			// cards.push(className);
			//console.log(cards);
			//const cards = [];
			//for(let card of cards){}
			//const noClass =
			// let clicks = 0;
			// let maxClicks = 2;

			// if (hasClass) {
			// 	console.log('Has class');
			// 	currentDiv.style.backgroundColor = className;
			//cards.push(className);
			//console.log(cards);
			//*****currentDiv.removeEventListener('click', handleCardClick);
			//currentDiv.classList.add('flipped');
			// console.log(clicks);
			// console.log('card 1');
			// if ((clicks = maxClicks))
			// 	currentDiv.removeEventListener('click', handleCardClick);
			// } else {
			// 	if ((e.target.backgroundColor = className)) {
			// 		e.target.style.backgroundColor = '';
			//cards.splice(className[i]);
			//console.log(cards);
			//*****currentDiv.addEventListener('click', handleCardClick);
		}
		// console.log(cards);
		// if (cards.length === 2) {
		// 	gameContainer.removeEventListener('click', handleCardClick);
		// }
	}
}

//console.log('NoClass');
//currentDiv.style.backgroundColor.remove(className[0]);
//console.log(hasClass);
// currentDiv.addEventListener('click', handleCardClick);

// if (currentDiv.includes('isClicked'))
// currentDiv.backgroundColor = currentDiv.classList[0];

// if (e.target === div.orange) {
// 	newDiv.style.backgroundColor = 'orange';
// } else {
// 	newDiv.style.backgroundColor = 'white';
// }

// you can use event.target to see which element was clicked
//for (let color of COLORS)
// console.log(e);
// console.log(e.target);
// let color = div.class;
//let isClicked = false;

// console.log(newDiv);

//newDiv.classList.toggle(color);
// let isClicked = false;
//let firstCard, secondCard;
//console.log('you just clicked', e.target);

//newDiv.classList.toggle();

// e.target.classList.add('isClicked');

// if (!isClicked) {
// 	e.target.classList.remove();
// }
// if (e.target.classList === 'isClicked') {
// }
//div.classList.toggle(color);
// newDiv.style.borderStyle = 'solid';
// newDiv.style.borderColor = 'black';
// newDiv.style.borderWidth = '1px';
// } else {
// 	e.target.classList.remove('isClicked');
// }
// }
//}
//}
// when the DOM loads
// document.addEventListener(
// 	'DomContentLoaded',
// createDivsForColors(shuffledColors);
//);

createDivsForColors(shuffledColors);

// card.addEventListener('click', function (e) {
// 	card.classList.toggle('is-flipped');
// 	console.log(e);
// });

// startGame.addEventListener('click', function (e) {
// 	//console.log(e);
// });

// endGame.addEventListener('click', function (e) {
// 	//console.log(e);
// 	//gameContainer.reset();
// });

//Make sure that you can not click too quickly and guess more than two cards at a time
// Use remove event lsitener for 2000ms and then add it back

//splicing the div array?
//if its true color translucent but false shows the colors or vice versa

// function handleCardClick(e) {
// 	if (noClicking) return;
// 	if (e.target.classList.contains("flipped")) return;

// 	let currentCard = e.target;
// 	currentCard.style.backgroundColor = currentCard.classList[0];

// 	if (!card1 || !card2) {
// 	  currentCard.classList.add("flipped");
// 	  card1 = card1 || currentCard;
// 	  card2 = currentCard === card1 ? null : currentCard;
// 	}

// 	if (card1 && card2) {
// 	  noClicking = true;
// 	  // debugger
// 	  let gif1 = card1.className;
// 	  let gif2 = card2.className;

// 	  if (gif1 === gif2) {
// 		cardsFlipped += 2;
// 		card1.removeEventListener("click", handleCardClick);
// 		card2.removeEventListener("click", handleCardClick);
// 		card1 = null;
// 		card2 = null;
// 		noClicking = false;
// 	  } else {
// 		setTimeout(function() {
// 		  card1.style.backgroundColor = "";
// 		  card2.style.backgroundColor = "";
// 		  card1.classList.remove("flipped");
// 		  card2.classList.remove("flipped");
// 		  card1 = null;
// 		  card2 = null;
// 		  noClicking = false;
// 		}, 1000);
// 	  }
// 	}
