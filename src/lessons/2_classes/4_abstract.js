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
var Animal2 = (function () {
    function Animal2(_name) {
        this._name = _name;
    }
    ;
    Object.defineProperty(Animal2.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: true,
        configurable: true
    });
    Animal2.prototype.move = function (meters) {
        console.log(this.name + " moves " + meters + " meters;");
    };
    ;
    return Animal2;
}());
var Dog2 = (function (_super) {
    __extends(Dog2, _super);
    function Dog2(name) {
        return _super.call(this, name) || this;
    }
    Dog2.prototype.makeSound = function () {
        console.log(this.name + " barks.");
    };
    return Dog2;
}(Animal2));
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.makeSound = function () {
        console.log(this.name + " ssssss.");
    };
    return Snake;
}(Animal2));
var popo2 = new Dog2('Popó');
popo2.makeSound();
popo2.move(2);
var sneak = new Snake('Sneak');
sneak.makeSound();
sneak.move(5);
