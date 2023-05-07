"use strict";
const course = "TypeScript First Code And This work right now";
console.log(course);
// Primitive Types 
// String 
const addString = "This is a string";
// Number 
const addNumber = 20;
// Boolean 
const addBoolean = true;
// Null 
const addNull = null;
// undefined 
const addUndefined = undefined;
function generateAdder(a) {
    return function (b) {
        return a + b;
    };
}
const addTwo = generateAdder(2);
console.log(addTwo(3));
console.log(addTwo(5));
