"use strict";
function printOnScreen(fullname, age, profession, learning) {
    if (learning === void 0) { learning = true; }
    // As a best practice, if you are initializing a variable with a value,
    // you don't need to add a type to it, because Typescript will (correctly)
    // infer the type according with the value you pass on:
    // let name = 'Iago' --> Typescript will infer: let name:string = 'Iago';
    // However, if you don't initialize a variable, you MUST specify a type:
    // let age: number;
    var sentence = "\n        <p>Hi, my name is " + fullname + ".</p>\n        <p>I'm " + age + " years old and I'm a " + profession + ".</p>\n    ";
    if (learning) {
        sentence += "<p>I'm Typescript to boost my Javascript applications.</p>";
    }
    return sentence;
}
