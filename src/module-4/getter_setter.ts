// class BankAccount {
//     id : number;
//     name : string;
//     private _balance : number; // private is  private and protected is allow to other children class

//     constructor (id : number, name : string, balance : number){
//         this.id = id;
//         this.name = name;
//         this._balance = balance;
//     }
//     //getter
//     get balance(){
//         return this._balance;
//     }
//     getBalance() : number{
//         return this._balance;
//     }
//     // setter 
//     set deposit(amount:number){
//         this._balance += amount;
//     }
//     // addDeposit(amount : number) {
//     //  this._balance += amount;
//     // }
// }



// const myAccount = new BankAccount(222,"Arif Biswas",5000)
// // console.log(myAccount.getBalance());
// // myAccount.addDeposit(1000);
// // console.log(myAccount);
// myAccount.deposit = 5;
// console.log(myAccount.balance);