// function overloads
// typescript could not assume the correct return type of a function
// when you can return a union, for example
// overload help with that.
type Card = { suit: string; card: number };
let suits = ['hearts', 'spades', 'clubs', 'diamonds'];

// overloads will tell to typescript the exact combination
// of inputs and outputs of a function
function pickCard(x: Card[]): number; // overload 1
function pickCard(x: number): Card; // overload 2
function pickCard(x: Card[] | number): Card | number {
    if (typeof x === 'number') {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 }
    }

    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard
}

let myDeck: Card[] = [
    { suit: "diamonds", card: 2 },
    { suit: "spades", card: 10 },
    { suit: "hearts", card: 4 }
];

let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card 1:", pickedCard1.card, "of", pickedCard1.suit)

// without overloads, `pickedCard2` would be the union type Card | number
// and typescript wouldn't expose the correct native methods in which
// the variable could use.
// For example, if we return a string | number, without overload,
// typescript wouldn't expose the strings methods when the return
// were a string.
let pickedCard2 = pickCard(20);
console.log("card 2:", pickedCard2.card, "of", pickedCard2.suit)