"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department2 = (function () {
    function Department2(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department2.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department2.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department2;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id) {
        return _super.call(this, id, 'Accounting') || this;
    }
    Object.defineProperty(AccountingDepartment, "instance", {
        get: function () {
            return this._instance = this._instance || new AccountingDepartment('a1');
        },
        enumerable: true,
        configurable: true
    });
    AccountingDepartment.prototype.describe = function () {
        console.log('Accounting Department - ID:', this.id);
    };
    return AccountingDepartment;
}(Department2));
var accounting = AccountingDepartment.instance;
accounting.addEmployee('Iago');
var accounting2 = AccountingDepartment.instance;
accounting2.addEmployee('Max');
console.log(accounting, accounting2);
