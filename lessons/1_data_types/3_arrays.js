"use strict";
var hobbies = ['games', 'soccer'];
// That's the way to type a array of strings.
// If you initialize an array with some values (of a same type)
// Typescript will automatically infer the type of the array (like ':string[]').
// So, the following code will be correct:
// const hobbies: = ['games', 'soccer']
// Now, if you initialize an empty array, you MUST specify its type:
// const hobbies: string[]
var languages = ['portuguese', 'english', 'spanish'];
// We can declare array using a generic array type: Array<elemType>
