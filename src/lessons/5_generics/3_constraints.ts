// generic with contraints
// sometimes, we want to receive, in a generics, type parameter of no specific type, but we want to limit it to a certain type which will work better with the logic of the generics.
// function loggingIdentity<T>(arg: T) {
//     return arg
// }
// in the following function, we can constraint the type parameter to types each have a length key so we can print it out.
// to do so, we must use the `extends` keyword, after the type parameter and specify the constrain we want.
interface LengthWise {
    length: number;
}
function countAndDescribe<T extends LengthWise>(arg: T): [T, string] {
    let descriptionText = 'Got length of 0.';
    if (arg.length === 1) {
        descriptionText = 'Got length of 1.';
    } else if (arg.length > 1) {
        descriptionText = `Got length of ${arg.length}`;
    }
    return [arg, descriptionText]
}

// now, the type parameter and the function parameter must contain the length key
// loggingIdentity(3); // Error, number doesn't have a .length property
const output3 = countAndDescribe({ length: 10, value: 3 });
console.log('output3', output3)
const output4 = countAndDescribe(`I'm a super hero!`);
console.log('output4', output4)
// We can use any type as a type constraint. We can also use other type parameters.

// keyof constraint
// it's a typescript reserverd word, which returns the union of the keys of a specified object.
// example:
// interface Person2 { name: string; age: number; }
// let personProps: keyof Person2; // the union of "name" | "age"

// The following generics will receive an object and a key name and will return the value of the key specified in the object passed in.
// However, we want to constraint this key parameter to the ones contained in the object passed in.
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
console.log(x)
console.log('x[a]:', getProperty(x, 'a'));
// console.log(getProperty(x, 'm')); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.