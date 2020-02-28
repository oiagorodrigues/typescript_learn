"use strict";
var Bird = (function () {
    function Bird(name) {
        this.name = name;
        this.type = 'bird';
    }
    Bird.prototype.fly = function () {
        console.log(this.name + ", the bird, flies.");
    };
    ;
    return Bird;
}());
var Fish = (function () {
    function Fish(name) {
        this.name = name;
        this.type = 'fish';
    }
    Fish.prototype.swim = function () {
        console.log(this.name + ", the fish, swims.");
    };
    ;
    return Fish;
}());
function getSmallPet() {
    var rand = Math.round(Math.random());
    return rand ? new Fish('Bob') : new Bird('Rio');
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function moveWithTypePredicator(pet) {
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }
}
function moveWithInOperator(pet) {
    if ('swim' in pet) {
        pet.swim();
    }
    else {
        pet.fly();
    }
}
function moveWithInstanceOf(pet) {
    if (pet instanceof Fish) {
        pet.swim();
    }
    else {
        pet.fly();
    }
}
function addStringOrNumber(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var smallpet = getSmallPet();
console.log('type predicate', moveWithTypePredicator(smallpet));
console.log('in operator', moveWithInOperator(smallpet));
console.log('instanceof', moveWithInstanceOf(smallpet));
console.log('typeof adding strings', addStringOrNumber('5', 2));
console.log('typeof adding numbers', addStringOrNumber(5, 2));
