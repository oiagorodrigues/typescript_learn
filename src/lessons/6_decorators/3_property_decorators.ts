// property decorators
// is declared just before a property declaration
// its the expression will be called as a function runtime and receives two arguments:
// 1. constructor function for a static member; or the prototype of the class for the instance member.
// 2. the name of the member.

function log2(target: any, prop: string | symbol) {
    console.log('property decorator!');
    console.log(target, prop);
}
class Product {
    @log2
    title: string;
    private price: number;
    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
    getPriceWithTax(tax: number) {
        return this.price * (1 + tax);
    }
}
