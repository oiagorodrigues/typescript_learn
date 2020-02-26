const person: {
    // this is a way of typefying an object, but Typescript will infer these
    // by itself, so it isn't necessary to declare them.
    // You can declare an object like a normal javascript object instead.
    firstname: string;
    lastname: string;
    fullname(): string;
} = {
    firstname: 'Iago',
    lastname: 'Rodrigues',
    fullname() {
        return `${this.firstname} ${this.lastname}`
    }
}

// to declare an empty object, we can do the following:
let job: {
    title: string;
    hourValue: number;
}
// It will create an empty object, but when you populate it, you should add
// the attributes specified in it (title, hourValue).
job = {
    title: 'Developer',
    hourValue: 15
}