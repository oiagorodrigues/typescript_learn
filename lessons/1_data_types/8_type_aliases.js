"use strict";
function walk(direction) {
    return "You have walked <strong>" + direction + "</strong>.";
}
console.log(walk('East'));
var me = {
    name: 'Iago Rodrigues',
    age: 27
};
function greet(user) {
    return "Hi, I'm <strong>" + user.name + "</strong>!";
}
console.log(greet(me));
// obs: aliases doesn't create a new type, it only gives a new name it
// so you can reuse this type without getting error, because you mispelled
// something.
