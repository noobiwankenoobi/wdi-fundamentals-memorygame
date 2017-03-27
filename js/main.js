
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

var cardsInPlay = [];

var cardOne = cards[0];

var cardTwo = cards[2];

cardsInPlay.push(cardOne);

cardsInPlay.push(cardTwo);



var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
	}
	else {
		alert('Sorry, try again.');
	}
}





console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);