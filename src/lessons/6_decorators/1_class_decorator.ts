// decorators
// are functions that extend the behavior of another function without explicitly modifying it.
// they can be used to observe, modify or replace a class definition
// decorators can be high-order functions which return another function
// they can attached to class declarations (acessing its constructor), methods, properties, acessors or parameters.
// they use the form `@expression`, where `expression` must evaluate to a function that will be called at runtime with information about the decorated declaration.
// decorators runs when the target is defined, not when it's executed.
// A decorator cannot be used in a declaration file, on an overload, or in any other ambient context(such as in a declare class).

// this is a class decorator.
// it's declared just before a class declaration.
// a class decorator is applied to the class constructor.
// the expression of the class decorator will be called as a function at runtime, with the constructor of the decorated class as its only argument.

function Logger(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
}

@Logger
class Person {
    name = 'Max';
    constructor() {
        console.log('Creating an object...');
    }
}

// if you choose to return a value, in  this returned function, the value must be a constructor function or a class (which is a syntatic sugar for a constructor).
// that's a decorator factory (see next lesson)
function logPerson(logText: string) {
    return function <T extends { new(...args: any[]): {} }>(target: T) {
        // this is a generic function which accept a type parameter that must be a constructor.
        return class extends target {
            constructor(..._: any[]) {
                // we must pass in the args (...args) in this constructor as well, but, since we are not using them, in these case, we can say to javascript that we don't wanna use it. We say that, providing an underscore (_);
                super();
                console.log(logText);
                console.log(target);
                // other logic injected in the class construtor
                // keep in mind: if you choose to return a constructor like that, the decorator will be executed each time you instantiate the class.
            }
        }
    }
}

@logPerson('LOGGING - PERSON')
class Person3 {
    constructor(public name: string) {
        console.log('Creating an object...');
    }
}

const pers = new Person3('Iago');