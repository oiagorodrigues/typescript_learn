// nullish coalescing (??)
// operator that verifies if a value is, precisely, null or undefined
// if it is, a default value must be available so it can be assigned

const userInput = 0; // change to null | undefined | '' | falsy values
const storeData1 = userInput || 'DEFAULT'; // JS solution: will choose the default value for every falsy value
const storeData2 = userInput ?? 'DEFAULT'; // TS solution: will choose the default value only for null or undefined values
console.log(storeData1);
console.log(storeData2);