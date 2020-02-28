"use strict";
function createSquare(config) {
    return {
        color: config.color || 'red',
        area: Math.pow(config.width, 2)
    };
}
var mySquare = createSquare({ width: 30 });
console.log(mySquare);
