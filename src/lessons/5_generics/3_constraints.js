"use strict";
function countAndDescribe(arg) {
    var descriptionText = 'Got length of 0.';
    if (arg.length === 1) {
        descriptionText = 'Got length of 1.';
    }
    else if (arg.length > 1) {
        descriptionText = "Got length of " + arg.length;
    }
    return [arg, descriptionText];
}
var output3 = countAndDescribe({ length: 10, value: 3 });
console.log('output3', output3);
var output4 = countAndDescribe("I'm a super hero!");
console.log('output4', output4);
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
console.log(x);
console.log('x[a]:', getProperty(x, 'a'));
