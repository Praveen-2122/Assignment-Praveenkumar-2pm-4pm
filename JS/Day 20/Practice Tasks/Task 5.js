// Create another class Manager that inherits from Employee and adds a department.


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

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);  
        this.department = department;
    }

    displayManagerInfo() {
        console.log(`Manager Name: ${this.name}, Salary: $${this.salary}, Department: ${this.department}`);
    }
}

const mgr1 = new Manager("Asha", 75000, "IT");
mgr1.displayManagerInfo(); 