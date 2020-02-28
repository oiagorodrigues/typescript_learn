// discriminated unions
// useful in function programming
// There are three ingredients:
// Types that have a common, singleton type property — the discriminant.
// A type alias that takes the union of those types — the union.
// Type guards on the common property.
interface Square {
    type: 'square'; /* 1 - the discriminant */
    size: number;
}
interface Rectangle {
    type: 'rectangle'; /* 1 - the discriminant */
    width: number;
    height: number;
}
interface Circle {
    type: 'circle'; /* 1 - the discriminant */
    radius: number;
}

type Shape = Circle | Rectangle | Square; /* 2 - the union */

/* 3 - the discriminated union */
// can use type guards to identify the `discriminant`
function area(shape: Shape) {
    switch (shape.type) {
        case 'circle': return `circle area - ${2 * Math.PI * shape.radius}`;
        case 'rectangle': return `rect area - ${shape.width * shape.height}`;
        case 'square': return `square area - ${shape.size * 2}`;
    }
}

console.log(area({ type: 'rectangle', width: 4, height: 2 }))
console.log(area({ type: 'square', size: 2 }))
console.log(area({ type: 'circle', radius: 5 }))