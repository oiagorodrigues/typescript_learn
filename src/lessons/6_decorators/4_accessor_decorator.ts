// accessors decorators
// is declared just before an accessor (getter | setter) declaration
// is applied to the Property Descriptor for the accessor.
// receives 3 arguments:
// constructor - static members; class prototype - instance members
// name of the member
// Property Descriptor for the member
// if the decorator returns a value, it must be the Property Decorator of the member.

function configurable(value: boolean) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
        console.log('target', target);
        console.log('key', key);
        console.log('descriptor', descriptor);
        console.log('');
    }
}
class Point {
    constructor(private _x: number, private _y: number) { }

    @configurable(false)
    get x() { return this._x }

    @configurable(false)
    get y() { return this._y }
}
