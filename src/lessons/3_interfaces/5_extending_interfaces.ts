// extending interfaces
interface ShapeInterface {
    color?: string;
}
interface PenStrokeInterface {
    penWidth: number;
}
interface SquareInterface2 extends ShapeInterface, PenStrokeInterface {
    sideLength: number;
}

let square = { sideLength: 10, penWidth: 5.0 } as SquareInterface2;
console.log(square);
let anotherShape: ShapeInterface = { color: 'black' };
console.log(anotherShape);