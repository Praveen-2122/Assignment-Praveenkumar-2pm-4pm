// Use prototype to add a new method to all Student objects dynamically

class Student{
    constructor(name) {
        this.name = name;
    }
}

const student1 = new Student ("Praveen");
const student2 = new Student ("Prabhu");
const student3 = new Student ("Naren");

Student.prototype.greet = function() {
    console.log(`hello ${this.name}, Welcome to the institute!`);
}

student1.greet();
student2.greet();
student3.greet();