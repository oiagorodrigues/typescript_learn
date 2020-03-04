"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function autobind(_, __, descriptor) {
    var originalMethod = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get: function () {
            return originalMethod.bind(this);
        }
    };
}
var Printer = (function () {
    function Printer() {
        this.message = 'This works!';
    }
    Printer.prototype.showMessage = function () {
        console.log(this.message);
    };
    __decorate([
        autobind
    ], Printer.prototype, "showMessage", null);
    return Printer;
}());
var printer = new Printer();
var button = document.createElement('button');
button.textContent = 'Click me!';
var app = document.querySelector('main');
app.appendChild(button);
button.addEventListener('click', printer.showMessage);
