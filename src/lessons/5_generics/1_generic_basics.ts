// generics (generic<T>)
// are general abstractions which receives another type and garantee the return
// or the storage of this type
// They capture the type the user provides, so it can use this information later
// They are common elements that know exactly the type of its input and output
// and works with a range of types.
// **They can receive different concrete types for different call of the generic
// or typescript can infer this by its own.

// arrays are example of generics.
// they can be represented as `string[]` or:
const names: Array<string> = ['iago', 'max', 'sidi'];
// Array<string> is a generic of type `Array`, which receives another type 
// `string` and returns something exactly like that, incresing type safety
// for the returned value.
console.log(names[0].substring(1));
// typescript will identify that the values of the array are strings
// and will expose all of the strings methods available and warn of errors.

// another example of generics are Promises.
// const promise = new Promise((resolve) => {
//     setTimeout(() => resolve('Resolved string.'), 2000)
// })
// this example will return a `Promise<unknown>`, which is a generic, but
// it's not infering the correct return type, so we can specify it
// passing the type which we are certain it will return
const promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve('Resolved string.'), 1000)
})

promise.then(data => {
    console.log(data.toLocaleLowerCase()); // exposed the correct string methods
})