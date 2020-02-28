// interfaces
// define the shape of javascript objects - meaning, its properties and behaviors
// define the structure of classes
// works as type checking of these objects
// they don't implement behaviors, besides its signature (like abstract classes) or properties
// the object, class that implements an interface needs to implement
// every property and/or behavior of the interface
interface Person {
    name: string;
    age: number;
    greet(): void; // method signature
}

const jhon: Person = {
    name: 'John',
    age: 27,
    greet() {
        console.log(`Hello, I'm ${this.name}!`);
    }
}

jhon.greet();