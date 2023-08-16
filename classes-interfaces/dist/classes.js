"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2022;
class ItDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('development - ID: ' + this.id);
    }
}
class Accounting extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please add a report');
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (Accounting.instance) {
            return this.instance;
        }
        this.instance = new Accounting('D2', []);
        return this.instance;
    }
    describe() {
        console.log('Accounting department - ID: ' + this.id);
    }
    addEmployee(name) {
        if (name == 'Luis') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReport() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee('Alberto');
console.log(employee1);
// const accounting = new Department('d1', 'Accounting');
// accounting.addEmployee('Luis');
// accounting.addEmployee('Denisse');
// accounting.name = 'New name';
// accounting.printEmployeesInformation();
// accounting.describe();
// console.log(accounting);
const development = new ItDepartment('d2', ['luis', 'diego']);
// const accountingDepartment = new Accounting('d2', [])
const accountingDepartment = Accounting.getInstance();
accountingDepartment.addEmployee('Luis');
accountingDepartment.addEmployee('Max');
accountingDepartment.mostRecentReport = 'last report';
accountingDepartment.addReport('new report');
console.log(accountingDepartment.describe());
console.log(accountingDepartment.mostRecentReport);
accountingDepartment.printReport();
// class Product {
//   title: string;
//   price: number;
//   private isListed: boolean;
//   constructor(name: string, pr: number) {
//     this.title = name;
//     this.price = pr;
//     this.isListed = true;
//   }
// }
// class Product {
//   private isListed: boolean;
//   constructor(public title: string, public price: number) {
//     this.isListed = true;
//   }
// }
// const milk = new Product('Milk', 38);
// console.log(milk)
