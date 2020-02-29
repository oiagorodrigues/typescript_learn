"use strict";
function identity(arg) {
    return arg;
}
var output = identity('MyString');
console.log('accessing generics with type variable -', typeof output, output);
var output2 = identity(30);
console.log('accessing generics with type argument inference -', typeof output2, output2);
