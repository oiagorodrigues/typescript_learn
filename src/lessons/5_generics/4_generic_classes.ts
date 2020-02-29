// generic classes
class DataStorage<T extends number | string> {
    private _data: T[] = [];
    get data() {
        return this._data
    }
    addItem(...items: T[]) {
        this._data.push(...items);
    }
    removeItem(item: T) {
        this._data.splice(this._data.indexOf(item), 1);
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Iago', 'Sidi');
textStorage.removeItem('Iago');
console.log(textStorage.data);

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1, 5, 11111);
numberStorage.removeItem(11111);
console.log(numberStorage.data);

// obs: Generic classes are only generic over their instance side rather than their static side, so when working with classes, static members can not use the class’s type parameter.