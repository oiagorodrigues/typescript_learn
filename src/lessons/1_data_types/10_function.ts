// Function type
// We can specify a function type passing the 'Function' keyword.
// But, this way we can't really specify what function we should add
// to variable.
// For this, we should do the following:
// let variable_name: (params) => return_type;
// Being: `params` -> the quantity of parameteres you should receive
// `return_type` -> the return type of the function.

function subtract(n1: number, n2: number): number {
    return n1 - n2
}
function printResult(num: number): void {
    console.log('Result:', num);
}
let subtractNumbers: (a: number, b: number) => number;
subtractNumbers = subtract;
// subtractNumbers = printResult; // Type '(num: number) => void' is not assignable to type '(a: number, b: number) => number'.

console.log(subtractNumbers(2, 8));

// typing callbacks
function subtractAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

// subtractAndHandle(1, 6, printResult)
subtractAndHandle(1, 6, result => {
    // Typescript will correctly infer the type of the argument passed
    // in this callback and will yell an error if we try to receive
    // a quantity of arguments diferent of the one defined.
    // (result, n2) => // Argument of type '(result: any, n2: any) => void' is not assignable to parameter of type '(num: number) => void'.
    console.log(result)
    // return result // as we specified that this callback will return void, if we try to return something, it'll be ignored, but it'll not throw an error.
})

// contextual typing
// Tpescript can infer the type of the parameters passed in a function, when
// we use the function type.
// This is called `contextual typing` and helps cut down the amount of effort
// to keep your program typed.
let multiply: (a: number, b: number) => number;
multiply = (base, multiple) => base * multiple;

// Optional and Default parameters
// We can define optional parameters using the '?' sign.
function buildName(firstName: string, lastName?: string, nickname = 'Ironside') {
    return lastName ? `${firstName} '${nickname}' ${lastName}` : firstName
}
console.log(buildName('Iago', 'Rodrigues'))
console.log(buildName('Sidiane', 'Rocha', undefined))
console.log(buildName('Sidiane', 'Rocha', 'Awesomebutt'))
console.log(buildName('Iago'))

// obs.:
// optional parameters MUST follow required parameters.
// If you wish to make the first parameter optional, you must put it last 
// in the parameters list.
// function buildName(lastName: string, firstName?: string) { ... }

// obs2:
// default-initialized parameters that come after required parameters are treated
// as optional parameters and can be omitted.
// To put a default parameter before a required one, you should pass in
// an undefined value when calling the function.
// function buildName(firstName = 'Iago', lastName: string) { ... }
// buildName(undefined, 'Rodrigues')
