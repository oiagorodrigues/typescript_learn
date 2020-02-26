"use strict";
function printOnScreen(fullname, age, profession, learning = true) {
    let sentence = `
        <p>Hi, my name is ${fullname}.</p>
        <p>I'm ${age} years old and I'm a ${profession}.</p>
    `;
    if (learning) {
        sentence += `<p>I'm Typescript to boost my Javascript applications.</p>`;
    }
    return sentence;
}
