class Person {
    takNap() : void {
        console.log("I am sleeping 8 hours per day");
    }
}

class Student extends Person {
    takNap() : void {
        console.log("I am sleeping 10 hours per day");
    }
}

class Developer extends Person {
    takNap(): void {
        console.log("I am sleeping 5 hours per day");
    }
}

function getPerson(param : Person){
    param.takNap();
}

const person1 =new Person();
const person2 =new Student();
const person3 =new Developer();

getPerson(person1);
getPerson(person2);
getPerson(person3);