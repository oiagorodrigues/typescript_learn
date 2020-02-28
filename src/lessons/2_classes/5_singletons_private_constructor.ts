// singleton pattern -> have exactly one instance of a class

abstract class Department2 {
    protected employees: string[] = [];
    constructor(protected readonly id: string, public name: string) { }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

// We only need 1 Accounting Department, so there's no need to 
// create n instances of the AccountingDepartment class.
// We can encapsulate this ability by turning the constructor
// into a private one and then exposing the instance created
// (inside the class) with a get or a method.
class AccountingDepartment extends Department2 {
    private static _instance: AccountingDepartment;

    private constructor(id: string) {
        super(id, 'Accounting');
    }
    static get instance() {
        return this._instance = this._instance || new AccountingDepartment('a1');
    }

    describe() {
        console.log('Accounting Department - ID:', this.id)
    }
}

// const accounting = new AccountingDepartment('a1'); //-> error
const accounting = AccountingDepartment.instance;
accounting.addEmployee('Iago');
const accounting2 = AccountingDepartment.instance;
accounting2.addEmployee('Max');

console.log(accounting, accounting2);