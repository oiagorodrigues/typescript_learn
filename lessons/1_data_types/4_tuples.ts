// Tuples are special array-like structures.
// If you know th length that an array will always have and the type of 
// each element inside it, tuples are the one to go.
let role: [number, string];
role = [2, 'author'];

// with this, typescript will enforce the length of the tuple when populating it:
// role = [2, 'author', 'john'] // Type '[number, string, string]' is not assignable to type '[number, string]'.

// and will know the type of each index
// role[1] = 10 // Type '10' is not assignable to type 'string'

// caveat:
// However, as tuples are an array, they have access to the push method.
// Typescript doesn't recognize it as an error, so if you push an element
// in a populated tuple, it'll not generate an error:
//role.push('john');
// but if you try to access the item pushed, typescript will complain about it.
// role[2] // Type '[number, string, string]' is not assignable to type '[number, string]'.