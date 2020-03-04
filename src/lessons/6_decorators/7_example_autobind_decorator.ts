function autobind(_: any, __: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            return originalMethod.bind(this); // will point to the the object which implements this getter, in this case, the Pointer class.
        }
    }
}
class Printer {
    message = 'This works!';

    @autobind
    showMessage() {
        console.log(this.message);
    }
}

const printer = new Printer();

// adding a button to the dom.
const button = document.createElement('button');
button.textContent = 'Click me!';

const app = document.querySelector('main')!;
app.appendChild(button);

button.addEventListener('click', printer.showMessage); //-> without the decorator, will print `undefined`, because the `this` referenced in the showMessage method is pointing to the printer instance and we are executing as a callback function, in this event listener, therefore, `this` is pointing to the event.