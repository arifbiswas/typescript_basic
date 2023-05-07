// elis mean you can help to type tag for declar ar types
type MyService = {
    productName: string,
    productPrice: number,
    productDescription : string,
    productImage: string,
    productID ?: string,
    productQuantity ?: number,
}

const prodcts : MyService ={
    productName: "Product Name",
    productPrice: 100,
    productDescription : "Product Description",
    productImage: "Product Image",
    productID: "Product ID",
}


type WeedingType = string;
type DevoicedType = string;
type singleType = boolean;
type ageType = number;


const isWeeding : WeedingType = "yea this is a weeding type"

const isDevoiced : DevoicedType = "yea this is a devoiced type"

const isSingle : singleType = true

const age : ageType = 20

type operationType = (x:number , y:number ) =>number;

const kostiria = (number1:number , number2:number, operation : operationType ) =>{
    return operation(number1, number2)
}

const kostiriaResult = kostiria(20,30,(x,y)=>x+y);
console.log(kostiriaResult);