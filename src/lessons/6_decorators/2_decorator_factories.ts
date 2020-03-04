// decorators factories
// are high-order functions which return another function (the decorators)
// the advantage of using a decorator factory is that you can receive parameters
// which may modify a behavior of the decorator itself
function LoggerFactory(logString = 'Logging...') {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}
@LoggerFactory('LOGGIN - PERSON')
class Person2 {
    name = 'Person2';
    constructor() {
        console.log('Creating an object...');
    }
}