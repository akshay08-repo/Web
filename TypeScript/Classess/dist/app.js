"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        // name: string;
        this.employees = [];
        // this.name = n;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployees() {
        // console.log(this.employees.length);
        console.log(this.employees);
    }
    printDepartment() {
        console.log(`Department ${this.id}: ${this.name}`);
    }
}
class ItDepartment extends Department {
    constructor(id, admin) {
        super(id, 'IT');
        this.admin = admin;
    }
}
class Finance extends Department {
    constructor(id, reports) {
        super(id, 'Finance');
        this.reports = reports;
        this.lastReport = reports[reports.length - 1];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    set mostRecentReport(value) {
        if (!value)
            throw new Error('Please pass in a valid name');
        this.addReport(value);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReport() {
        console.log(this.reports);
    }
    addEmployee(employee) {
        if (employee == 'Akshay')
            return;
        this.employees.push(employee);
    }
}
// const it = new ItDepartment('Accounting', ['Admin']);
// it.printDepartment();
// it.addEmployee("Akshay");
// it.addEmployee("Chow");
// // it.employees[2] = 'Anna';
// it.printEmployees();
// console.log(it);
const fin = new Finance('Fin', []);
fin.addReport('this is a dummy report');
fin.mostRecentReport = 'this is a final report';
console.log(fin.mostRecentReport);
fin.printReport();
console.log(fin);
fin.addEmployee('akki');
// const accountingcopy = { name: 'Dummy', printDepartment: accounting.printDepartment };
// accountingcopy.printDepartment();
