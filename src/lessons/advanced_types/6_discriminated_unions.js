"use strict";
function area(shape) {
    switch (shape.type) {
        case 'circle': return "circle area - " + 2 * Math.PI * shape.radius;
        case 'rectangle': return "rect area - " + shape.width * shape.height;
        case 'square': return "square area - " + shape.size * 2;
    }
}
console.log(area({ type: 'rectangle', width: 4, height: 2 }));
console.log(area({ type: 'square', size: 2 }));
console.log(area({ type: 'circle', radius: 5 }));
