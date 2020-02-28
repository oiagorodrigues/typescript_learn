// abstract
abstract class Animal2 {
    constructor(private _name: string) { };
    get name() {
        return this._name
    }
    set name(newName: string) {
        this._name = newName
    }
    abstract makeSound(): void;
    move(meters: number) {
        console.log(`${this.name} moves ${meters} meters;`);
    };
}

class Dog2 extends Animal2 {
    constructor(name: string) {
        super(name)
    }
    makeSound() {
        console.log(`${this.name} barks.`);
    }
}

class Snake extends Animal2 {
    constructor(name: string) {
        super(name)
    }
    makeSound() {
        console.log(`${this.name} ssssss.`);
    }
}

const popo2 = new Dog2('Popó');
popo2.makeSound();
popo2.move(2);

const sneak = new Snake('Sneak');
sneak.makeSound();
sneak.move(5);