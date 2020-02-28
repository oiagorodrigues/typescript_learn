// using interfaces as function type
interface AddFunc {
    (a: number, b: number): number
}

let addTwoNumbers: AddFunc = (n1, n2) => n1 + n2;
console.log(addTwoNumbers(23, 5));