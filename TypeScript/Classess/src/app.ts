class Department {
    // name: string;
    protected employees: string[] = [];

    constructor(public name: string, private readonly id: string) {
        // this.name = n;
    }
    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    printEmployees() {
        // console.log(this.employees.length);
        console.log(this.employees);
    }
    printDepartment(this: Department) {
        console.log(`Department ${this.id}: ${this.name}`);
    }
}

class ItDepartment extends Department {
    constructor(id: string, public admin: string[]) {
        super(id, 'IT');
    }
}
class Finance extends Department {
    private lastReport: string;
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    set mostRecentReport(value: string) {
        if (!value)
            throw new Error('Please pass in a valid name');
        this.addReport(value);
    }
    constructor(id: string, private reports: string[]) {
        super(id, 'Finance');
        this.lastReport = reports[reports.length - 1];
    }
    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReport() {
        console.log(this.reports);
    }
    addEmployee(employee: string) {
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