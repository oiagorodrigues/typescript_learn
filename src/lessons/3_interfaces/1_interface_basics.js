"use strict";
var jhon = {
    name: 'John',
    age: 27,
    greet: function () {
        console.log("Hello, I'm " + this.name + "!");
    }
};
jhon.greet();
