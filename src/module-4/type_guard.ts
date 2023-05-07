// // key of guard 
// type AlphaNumerics = number | string ;
// function add (param1 : AlphaNumerics , param2 : AlphaNumerics) : AlphaNumerics{
//     if(typeof param1 === 'number' && typeof param2 === "number"){
//         return param1 + param1;
//     }
//     else{
//         return param1.toString() + param2.toString();
//     }
// }

// add("2","5");
// add(3,5)

// // in guard 
// type NormalUserType ={
//     name : string
// }

// type AdminType = NormalUserType & {
//     role : "admin"
// }

// function getUser(user : NormalUserType | AdminType): string{
//     if("role" in user){
//         return `I am an admin and my role is ${user.role}`;
//     }
//     else{
//         return `I am a normal user`;
//     }
// }

// const normalUser : NormalUserType ={name : "abdul akar"};
// const adminUser : AdminType = {name : "Sokina akter" , role : "admin"}

// console.log(getUser(normalUser));
// console.log(getUser(adminUser));

// // instanceof guard 

// class Animal {
//     name : string;
//     species : string;
//     constructor(name : string, species : string){
//         this.name = name;
//         this.species = species;
//     }
//     makeSound(){
//         console.log("I am making sound");
//     }
// }


// class Dog extends Animal {
//     constructor(name : string, species : string){
//         super(name, species);
//     }
//     makeBark (){
//         console.log("I am Barking");
//     }
// }

// class Cat extends Animal {
//     constructor(name : string, species : string){
//         super(name, species);
//     }
//     makeMeaw(){
//         console.log("I am Meawing");
//     }
// }

// function isDog(animal0 : Animal) : animal0 is Dog {
//     return animal0 instanceof Dog
// };

// function isCat(animal0 : Animal) : animal0 is Cat {
//     return animal0 instanceof Cat
// };

// function getAnimal(animal : Animal){
//     if(isDog(animal)){
//         animal.makeBark()
//     }
//     else if(isCat(animal)){
//         animal.makeMeaw();
//     }
//     else{
//         animal.makeSound();
//     }
// }

// const animal1 = new Dog("German bhai", "Dong"); //Instance of Dog
// const animal2 = new Cat("Persian Bhai", "Cat"); //Instance of Cat

// getAnimal(animal1);
// getAnimal(animal2);