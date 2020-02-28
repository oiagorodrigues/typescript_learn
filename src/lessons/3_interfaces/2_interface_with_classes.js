"use strict";
var Clock = (function () {
    function Clock() {
    }
    Clock.prototype.getTime = function (d) {
        var hours = d.getHours();
        var minutes = d.getMinutes();
        console.log("It's " + hours + ":" + minutes + ".");
    };
    return Clock;
}());
var myClock = new Clock();
myClock.getTime(new Date());
