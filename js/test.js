var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardInPlay = [];
var cardId = cards[0, 1, 2, 3];
var gameBoard = document.getElementById('game-board');

var flipCard = function() {
	this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId]);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.getElementsByTagName('card')[0].setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch(flipCard);
	}
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
	}
	else {
		alert('Sorry, try again.');
	}
}

createBoard();