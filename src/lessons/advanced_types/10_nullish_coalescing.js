"use strict";
var userInput = 0;
var storeData1 = userInput || 'DEFAULT';
var storeData2 = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storeData1);
console.log(storeData2);
