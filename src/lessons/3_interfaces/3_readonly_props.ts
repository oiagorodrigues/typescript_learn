// readonly
// we ca have readonly variables, but not private or protected ones.
interface Point {
    readonly x: number;
    readonly y: number;
    // private z: number; //-> error
}

const p1: Point = { x: 2, y: 3 }
console.log('Point:', p1);
// p1.x = 5; //-> error

// typescript also has a readonly array type (ReadonlyArray)
let arr: number[] = [1, 2, 3, 4];
let roArr: ReadonlyArray<number> = arr;
// roArr[2] = 5; //-> error