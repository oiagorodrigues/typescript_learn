"use strict";
var suits = ['hearts', 'spades', 'clubs', 'diamonds'];
function pickCard(x) {
    if (typeof x === 'number') {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
    var pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
}
var myDeck = [
    { suit: "diamonds", card: 2 },
    { suit: "spades", card: 10 },
    { suit: "hearts", card: 4 }
];
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card 1:", pickedCard1.card, "of", pickedCard1.suit);
var pickedCard2 = pickCard(20);
console.log("card 2:", pickedCard2.card, "of", pickedCard2.suit);
