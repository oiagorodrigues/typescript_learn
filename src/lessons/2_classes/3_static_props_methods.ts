// static props and methods
class Calculator {
    static PI = 3.14159265359;
    static sum(n1: number, n2: number) {
        console.log(`n1 + n2 = ${n1 + n2}`);
    }
    static subtract(n1: number, n2: number) {
        console.log(`n1 - n2 = ${n1 - n2}`);
    }
}

Calculator.sum(2, Calculator.PI);
Calculator.subtract(10, 5);