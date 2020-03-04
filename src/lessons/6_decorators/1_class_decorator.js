"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(constructor) {
    console.log('Logging...');
    console.log(constructor);
}
var Person = (function () {
    function Person() {
        this.name = 'Max';
        console.log('Creating an object...');
    }
    Person = __decorate([
        Logger
    ], Person);
    return Person;
}());
function logPerson(logText) {
    return function (target) {
        return (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _ = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _[_i] = arguments[_i];
                }
                var _this = _super.call(this) || this;
                console.log(logText);
                console.log(target);
                return _this;
            }
            return class_1;
        }(target));
    };
}
var Person3 = (function () {
    function Person3(name) {
        this.name = name;
        console.log('Creating an object...');
    }
    Person3 = __decorate([
        logPerson('LOGGING - PERSON')
    ], Person3);
    return Person3;
}());
var pers = new Person3('Iago');
