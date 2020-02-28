class Department {
    private employees: string[] = [];
    // private fields will not be accessed outsed the class's scope
    // accounting.employees.push('Ana Maria') //-> Property 'employees' is private and only accessible within class 'Department'.
    constructor(private readonly id: string, private name: string) { }
    // readonly -> will tell that the field CANNOT be changed and, if you try to, typescript will yell an error.
    // this.id = 'new ID'; //-> Cannot assign to 'id' because it is a read-only property.
    get getEmployees(this: Department) {
        return this.employees;
    }
    set setEmployees(this: Department, name: string) {
        this.employees.push(name);
    }
    describe(this: Department) {
        // adding this as a special parameter here, will help the compiler
        // identify error when trying to use this method outside of the class scope.
        // Example: if I try to copy this method, outside the class:
        // const describe = accounting.describe;
        // describe() //-> Department: undefined - If we don't pass this: Department as parameter;
        // With `this` as a parameter, the compiler will identify
        // that we are trying to access the Department scope (this: Department)
        // and will yell an error.
        console.log('ID:', this.id, 'Department:', this.name);
    }
    employeesInformation(this: Department) {
        const employees = this.getEmployees;
        console.log(String(employees.length), 'employees', '-', employees.join(" | "))
    }
}

const ti = new Department('d1', 'TI');
console.log(ti);
ti.describe();
ti.setEmployees = 'Iago';
ti.setEmployees = 'Sidiane';
ti.employeesInformation();