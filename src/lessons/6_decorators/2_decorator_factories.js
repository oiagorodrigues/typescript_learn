"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function LoggerFactory(logString) {
    if (logString === void 0) { logString = 'Logging...'; }
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
var Person2 = (function () {
    function Person2() {
        this.name = 'Person2';
        console.log('Creating an object...');
    }
    Person2 = __decorate([
        LoggerFactory('LOGGIN - PERSON')
    ], Person2);
    return Person2;
}());
