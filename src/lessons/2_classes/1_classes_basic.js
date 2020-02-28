"use strict";
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Object.defineProperty(Department.prototype, "getEmployees", {
        get: function () {
            return this.employees;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Department.prototype, "setEmployees", {
        set: function (name) {
            this.employees.push(name);
        },
        enumerable: true,
        configurable: true
    });
    Department.prototype.describe = function () {
        console.log('ID:', this.id, 'Department:', this.name);
    };
    Department.prototype.employeesInformation = function () {
        var employees = this.getEmployees;
        console.log(String(employees.length), 'employees', '-', employees.join(" | "));
    };
    return Department;
}());
var ti = new Department('d1', 'TI');
console.log(ti);
ti.describe();
ti.setEmployees = 'Iago';
ti.setEmployees = 'Sidiane';
ti.employeesInformation();
