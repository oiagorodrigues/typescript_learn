// optional properties
interface SquareInterface {
    color?: string; // optional
    width: number;
}

type SquareType = { color: string, area: number };

function createSquare(config: SquareInterface): SquareType {
    return {
        color: config.color || 'red',
        area: config.width ** 2
    };
}

let mySquare = createSquare({ width: 30 });
console.log(mySquare);