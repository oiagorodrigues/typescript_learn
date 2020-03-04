// parameter decorator
// is declared just before a parameter declaration
// is applied to the function for a class constructor or method declaration
// receives the same 3 arguments of an accessor decorator:
// constructor - static members; class prototype - instance members
// name of the member
// The ordinal index (position) of the parameter in the function's parameter list

// the return value of the parameter decorator is IGNORED.
function logParameter(target: any, key: string | symbol, position: number) {
    console.log('Parameter Decorator');
    console.log('target', target);
    console.log('key', key);
    console.log('position', position);
    console.log('');
}
class Greeter2 {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet(@logParameter name: string) {
        return "Hello " + name + ", " + this.greeting;
    }
}