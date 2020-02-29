// creating a generics
// Let's create a identity function, which will return whatever we pass in;
// function identity(arg: string): string {
//     return arg;
// }
// this would be very specify and we couldn't pass anything besides a string.
// A generic is something more general, so we need to receive any type.
// function identity(arg: any): any {
//     return arg;
// }
// Now that's certainly generic, but we are losing the information passed in
// the function. For example, if we pass a number as argument, the function
// will return a `any` and not the type we passed in. We lose the type
// information and type safety this way.
// **Instead, we need a way of capturing the type of the argument in such a way 
// that we can also use it to denote what is being returned. 
// That's where generics come in handy!
// generics are specified as `generic_name<type_parameter>`;
// usually, we name the type parameter as `T` for a single argument
// and you can understand `T` as of a range of types.
function identity<T>(arg: T): T {
    return arg;
}
// We've added a type variable (or parameter) `T` to identify the function. This T allows us to capture the type the user provides (e.g: number), so we can use that information later.
// this generic function is different from the function which receives `any` type, because it doesn't lose any information.
// We can call the generics in one of two ways:
// specifying the type variable
let output = identity<string>('MyString');
console.log('accessing generics with type variable -', typeof output, output);
// using typescript's type argument inference
let output2 = identity(30);
console.log('accessing generics with type argument inference -', typeof output2, output2);