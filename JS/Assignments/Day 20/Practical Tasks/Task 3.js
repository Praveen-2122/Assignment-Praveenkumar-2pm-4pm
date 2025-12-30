// Class Student with constructor and display() method

class student{
    constructor(name,roll) {
        this.name = name;
        this.roll = roll;
    }
    display(){
        console.log(`Student Name : ${this.name}, Roll No : ${this.roll}`);        
    }
}

const student1 = new student ("Praveen", 44);
const student2 = new student ("Prabhu", 43);
const student3 = new student ("Naren", 40);

student1.display();
student2.display();
student3.display(); 