// type guard
// are runtime checkers that garantees the time in some scope
interface Name {
    name: string;
    readonly type: string;
}
class Bird implements Name {
    type = 'bird';
    constructor(public name: string) { }
    fly(): void {
        console.log(`${this.name}, the bird, flies.`)
    };
}
class Fish implements Name {
    type = 'fish';
    constructor(public name: string) { }
    swim(): void {
        console.log(`${this.name}, the fish, swims.`);
    };
}
type FishOrBird = Fish | Bird;
function getSmallPet(): FishOrBird {
    const rand = Math.round(Math.random());
    return rand ? new Fish('Bob') : new Bird('Rio')
}

// using type predicates type guards
// predicate takes the form of `parameterName is Type`, where `parameterName`
// must be the name of a parameter from the current function signature
function isFish(pet: FishOrBird): pet is Fish {
    return (pet as Fish).swim !== undefined
}
function moveWithTypePredicator(pet: FishOrBird): void {
    if (isFish(pet)) {
        pet.swim();
    } else {
        pet.fly();
    }
}

// using the `in` operator
// n in x -> where `n` is a string literal as a member of an object
// and `x` is a union type.
// caveats: the left side could be mispealed or the name could be changed
// and it would be difficult to find a problem at a first glance
function moveWithInOperator(pet: FishOrBird): void {
    if ('swim' in pet) {
        pet.swim()
    } else {
        pet.fly();
    }
}

// using instanceof type guard
// verifies if an element is an intance of a class (only)
// the right side MUST be a class or have some sort of constructor function
function moveWithInstanceOf(pet: FishOrBird): void {
    if (pet instanceof Fish) {
        pet.swim()
    } else {
        pet.fly();
    }
}

// using typeof type guard
type StringOrNumber = string | number;
function addStringOrNumber(a: StringOrNumber, b: StringOrNumber) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const smallpet: FishOrBird = getSmallPet();
console.log('type predicate', moveWithTypePredicator(smallpet))
console.log('in operator', moveWithInOperator(smallpet))
console.log('instanceof', moveWithInstanceOf(smallpet))
console.log('typeof adding strings', addStringOrNumber('5', 2))
console.log('typeof adding numbers', addStringOrNumber(5, 2))
