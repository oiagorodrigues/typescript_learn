// type void
// is best used in functions which don't return anything.
function add(number1: number, number2: number): number {
    return number1 + number2
}
function printResults(num: number): void {
    console.log('Result:', num);
    // return num //Type 'number' is not assignable to type 'void'.
}
printResults(add(5, 10));