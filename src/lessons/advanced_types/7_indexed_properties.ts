// index properties (signatures)
// [key: type]: return_type
// type can be a `string` or `number`
// we can add predefined properties, but it must be of the same type

// let's say we wanna predefined error messages in an html form.
// since we don't know how many elements we are going to add,
// and to make the code more flexible, we can use index properties
// (or dynamic properties) to define a contract.
// { email: 'Not a valid email', email: 'Must start with a capital letter', ...}
interface ErrorContainer {
    // id: number; //-> not assinable to string index. Must be a string, in this case.
    [key: string]: string; // index signature
}

let errorBar: ErrorContainer = {
    email: 'Not an email.',
    name: 'Must start with a capital letter'
}