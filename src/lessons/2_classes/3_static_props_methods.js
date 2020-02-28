"use strict";
var Calculator = (function () {
    function Calculator() {
    }
    Calculator.sum = function (n1, n2) {
        console.log("n1 + n2 = " + (n1 + n2));
    };
    Calculator.subtract = function (n1, n2) {
        console.log("n1 - n2 = " + (n1 - n2));
    };
    Calculator.PI = 3.14159265359;
    return Calculator;
}());
Calculator.sum(2, Calculator.PI);
Calculator.subtract(10, 5);
