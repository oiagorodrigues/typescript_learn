"use strict";
function subtract(n1, n2) {
    return n1 - n2;
}
function printResult(num) {
    console.log('Result:', num);
}
let subtractNumbers;
subtractNumbers = subtract;
console.log(subtractNumbers(2, 8));
function subtractAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
subtractAndHandle(1, 6, result => {
    console.log(result);
});
let multiply;
multiply = (base, multiple) => base * multiple;
function buildName(firstName, lastName, nickname = 'Ironside') {
    return lastName ? `${firstName} '${nickname}' ${lastName}` : firstName;
}
console.log(buildName('Iago', 'Rodrigues'));
console.log(buildName('Sidiane', 'Rocha', undefined));
console.log(buildName('Sidiane', 'Rocha', 'Awesomebutt'));
console.log(buildName('Iago'));
let log;
log = (...args) => console.log(args.join(' '));
log('Using', 'rest', 'operators', 'with', 'typescript', 3.75);
