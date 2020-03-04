"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function configurable(value) {
    return function (target, key, descriptor) {
        descriptor.configurable = value;
        console.log('target', target);
        console.log('key', key);
        console.log('descriptor', descriptor);
        console.log('');
    };
}
var Point = (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () { return this._x; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () { return this._y; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        configurable(false)
    ], Point.prototype, "x", null);
    __decorate([
        configurable(false)
    ], Point.prototype, "y", null);
    return Point;
}());
