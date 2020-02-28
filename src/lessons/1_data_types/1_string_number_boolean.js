"use strict";
function printOnScreen(fullname, age, profession, learning) {
    if (learning === void 0) { learning = true; }
    var sentence = "\n        <p>Hi, my name is " + fullname + ".</p>\n        <p>I'm " + age + " years old and I'm a " + profession + ".</p>\n    ";
    if (learning) {
        sentence += "<p>I'm Typescript to boost my Javascript applications.</p>";
    }
    return sentence;
}
