"use strict";
// never
// most used in function which never returns anything.
// The difference between never and void is that when using 'void',
// the browser will return `undefined`, in the console, to specify that the function
// doesn't return anything (but it kind is!).
// With the following function, it doesn't return this `undefined`. It doesn't 
// return anything at all.
// So, in these situations, using 'never' is the best option.
function generateError(message, code) {
    throw { message: message, code: code };
}
generateError('An error ocurred', 500);
