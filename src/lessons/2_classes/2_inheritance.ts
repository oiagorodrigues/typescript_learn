// inheritance
enum AnimalType { DOG = 'dog', CAT = 'cat' };
class Animal {
    constructor(protected name: string, private type: AnimalType, private speakSound: string) { }
    // protected modifier let us access a property in any class extending this one,  
    // but still protects it from outside of the scope.
    // in this case, there's no need for a get | set methods.
    get getType() {
        return this.type
    }
    set setType(type: AnimalType) {
        this.type = type
    }
    speak() {
        console.log(`${this.name}, the ${this.type}, ${this.speakSound}s!`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name, AnimalType.DOG, 'bark');
    }
}
class Cat extends Animal {
    constructor(name: string) {
        super(name, AnimalType.CAT, 'meow');
    }
    speak() {
        this.name = 'John';
        console.log(this.name, ', my cat, moows!');
    }
}

const popo = new Dog('Popó');
popo.speak();
const pele = new Cat('Pelé');
pele.speak();