"use strict";
function subtract(n1, n2) {
    return n1 - n2;
}
function printResult(num) {
    console.log('Result:', num);
}
var subtractNumbers;
subtractNumbers = subtract;
console.log(subtractNumbers(2, 8));
function subtractAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
subtractAndHandle(1, 6, function (result) {
    console.log(result);
});
var multiply;
multiply = function (base, multiple) { return base * multiple; };
function buildName(firstName, lastName, nickname) {
    if (nickname === void 0) { nickname = 'Ironside'; }
    return lastName ? firstName + " '" + nickname + "' " + lastName : firstName;
}
console.log(buildName('Iago', 'Rodrigues'));
console.log(buildName('Sidiane', 'Rocha', undefined));
console.log(buildName('Sidiane', 'Rocha', 'Awesomebutt'));
console.log(buildName('Iago'));
var log;
log = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return console.log(args.join(' '));
};
log('Using', 'rest', 'operators', 'with', 'typescript', 3.75);
