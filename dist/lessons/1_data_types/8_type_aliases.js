"use strict";
function walk(direction) {
    return `You have walked <strong>${direction}</strong>.`;
}
console.log(walk('East'));
const me = {
    name: 'Iago Rodrigues',
    age: 27
};
function greet(user) {
    return `Hi, I'm <strong>${user.name}</strong>!`;
}
console.log(greet(me));
