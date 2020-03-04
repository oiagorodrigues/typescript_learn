// method decorator
// is declared just before a method declaration
// is applied to the Property Description for the method
// receives the same 3 arguments of an accessor decorator:
// constructor - static members; class prototype - instance members
// name of the member
// Property Descriptor for the member
// if the decorator returns a value, it must be the Property Decorator of the member.

function enumerable(value: boolean) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
        console.log('target', target);
        console.log('key', key);
        console.log('descriptor', descriptor);
        console.log('');
    }
}

class Greeter {
    constructor(public greeting: string) { }

    @enumerable(false)
    greet() {
        return `Hello ${this.greeting}`
    }
}