// Create a class Employee with name and salary — add a method to display info.

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    displayInfo() {
        console.log(`Employee Name: ${this.name}, Salary: $${this.salary}`);
    }
}

const emp1 = new Employee("Praveen",30000);
emp1.displayInfo();