// interface 

// interface IVehicle {
//     name : string ;
//     modal : string ;
// }

// const vehicle : IVehicle ={
//     name : "Car",
//     modal : "2000"
// }

interface IVehicle {
    startEngine():void;
    stopEngine():void;
    move():void;
}

// class Vehicle implements IVehicle {
//     startEngine(): void {
//         console.log("Now I am startEngine");
//     }
//     stopEngine(): void {
//         console.log("Now I am stopEngine");
//     }
//     move(): void {
//         console.log("Now I am move");
//     }
// };

// abstract class 

abstract class Vehicle implements IVehicle {
    constructor(
     public   name : string,
     public bran : string,
     public   modal : number
    ){}
   abstract startEngine(): void 
   abstract stopEngine(): void 
    move(): void {
        console.log("this is moving");
    }
};

class Car extends Vehicle {
    startEngine(): void {
        console.log("this is starting");
    }
    stopEngine(): void {
        console.log("this is stopping");
    }
}