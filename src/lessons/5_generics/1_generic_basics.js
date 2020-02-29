"use strict";
var names = ['iago', 'max', 'sidi'];
console.log(names[0].substring(1));
var promise = new Promise(function (resolve) {
    setTimeout(function () { return resolve('Resolved string.'); }, 1000);
});
promise.then(function (data) {
    console.log(data.toLocaleLowerCase());
});
