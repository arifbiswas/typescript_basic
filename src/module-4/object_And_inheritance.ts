// class Parent{
//     name : string;
//     age : number;
//     address : string;
//     constructor(name : string,age : number,address : string){
//             this.name = name;
//             this.age = age;
//             this.address = address;
//     }
//     makeSleep(hours : number): string{
//          return `This ${this.name} will sleep for ${hours} hours.`;
//     }
// }



// // class Student {
// //     name : string;
// //     age : number;
// //     roll : number;
// //     grade : number;
// //     constructor(name : string, age : number, roll : number, grade : number) {
// //         this.name = name;
// //          this.age = age;
// //          this.roll = roll;
// //          this.grade = grade;
// //     }
// //     makeSleep(hours : number) : string {
// //         return `This ${this.name} will sleep for ${hours} hours.`;
// //     }
// // }

// // Inheritance of TypeScript
// class Student extends Parent{
//     roll : number;
//     grade : number;
//     constructor(name : string,address : string, age : number, roll : number, grade : number) {
//         super(name,age,address);
//          this.roll = roll;
//          this.grade = grade;
//     }
// }

// const student1 = new Student("Mister X","nosto logical",20,30,20)
// console.log(student1.makeSleep(8));


// class Teacher extends Parent {
//     designation : string;
//     constructor(name : string, age : number, address : string, designation : string) {
//        super(name,age,address)
//         this.designation = designation;
//     }
//     makeDinner(food : string) : string {
//         return `This ${this.name} will eat ${food}.`;
//     }
//     makeClasses(numberOfClasses : number) : string {
//         return `This ${this.name} will have ${numberOfClasses} classes.`;
//     }
// }

// const teacher1 = new Teacher("Mir Y",62,"Agun tola bafun kolu","Professor");

// console.log(teacher1.makeDinner("pizza"));
// console.log(teacher1.makeClasses(3));