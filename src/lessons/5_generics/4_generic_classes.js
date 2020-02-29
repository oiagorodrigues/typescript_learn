"use strict";
var DataStorage = (function () {
    function DataStorage() {
        this._data = [];
    }
    Object.defineProperty(DataStorage.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    DataStorage.prototype.addItem = function () {
        var _a;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        (_a = this._data).push.apply(_a, items);
    };
    DataStorage.prototype.removeItem = function (item) {
        this._data.splice(this._data.indexOf(item), 1);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem('Iago', 'Sidi');
textStorage.removeItem('Iago');
console.log(textStorage.data);
var numberStorage = new DataStorage();
numberStorage.addItem(1, 5, 11111);
numberStorage.removeItem(11111);
console.log(numberStorage.data);
