"use strict";
var person = {
    firstname: 'Iago',
    lastname: 'Rodrigues',
    fullname: function () {
        return this.firstname + " " + this.lastname;
    }
};
// to declare an empty object, we can do the following:
var job;
// It will create an empty object, but when you populate it, you should add
// the attributes specified in it (title, hourValue).
job = {
    title: 'Developer',
    hourValue: 15
};
