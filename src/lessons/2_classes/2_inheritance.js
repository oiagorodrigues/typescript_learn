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
var AnimalType;
(function (AnimalType) {
    AnimalType["DOG"] = "dog";
    AnimalType["CAT"] = "cat";
})(AnimalType || (AnimalType = {}));
;
var Animal = (function () {
    function Animal(name, type, speakSound) {
        this.name = name;
        this.type = type;
        this.speakSound = speakSound;
    }
    Object.defineProperty(Animal.prototype, "getType", {
        get: function () {
            return this.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "setType", {
        set: function (type) {
            this.type = type;
        },
        enumerable: true,
        configurable: true
    });
    Animal.prototype.speak = function () {
        console.log(this.name + ", the " + this.type + ", " + this.speakSound + "s!");
    };
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name, AnimalType.DOG, 'bark') || this;
    }
    return Dog;
}(Animal));
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name, AnimalType.CAT, 'meow') || this;
    }
    Cat.prototype.speak = function () {
        this.name = 'John';
        console.log(this.name, ', my cat, moows!');
    };
    return Cat;
}(Animal));
var popo = new Dog('Popó');
popo.speak();
var pele = new Cat('Pelé');
pele.speak();
