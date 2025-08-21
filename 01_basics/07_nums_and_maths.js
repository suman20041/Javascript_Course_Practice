const score = 400  //Automatically define this is number type
// console.log(score);


// Explicitely define
const balance = new Number(100)  //specifically define this is number type. new object i define this is number type
// console.log(balance);
// console.log(balance.toString());
// console.log(typeof balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));   //no. of value after decimal. Mostly used in E-commerce application to make the precision value short.


const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));  //need precise value but we focus how much of value. priority give before the decimal.
// const otherNumbertwo = 1123.8966
// console.log(otherNumbertwo.toPrecision(3));  //3 precision value others are exponential


const hundreds = 10000000
// console.log(hundreds.toLocaleString());  //value return according to USA standard
// console.log(hundreds.toLocaleString('en-IN'));  //default value change in Indian standard


// +++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++

// console.log(Math);  //Math is a object.
// console.log(Math.abs(-4));   //abs means absolute value. Change the sign of -ve value to +ve value
// console.log(Math.round(4.6));   //round is a function associated with the Math object, it's called a method, not a property.
// console.log(Math.ceil(4.2));  // Ceil means top value choose.
// console.log(Math.floor(4.9));   //Floor always take lowest value
// console.log(Math.min(4, 3, 6, 8));   //min value choose from the given value
// console.log(Math.max(4, 3, 6, 8));    //max value choose from the given value


console.log(Math.random()) // The random value generate from 0 to 1
console.log(Math.random()*10);  
console.log((Math.random()*10) + 1);  //Minimum value 1 avoid 0 so we add +1. 
console.log(Math.floor(Math.random()*10) + 1);  

const min = 10
const max = 20

// console.log(Math.floor(Math.random()*(max - min + 1))+min);







//"property" is a named value associated with an object, while a "function" is a block of code that performs a specific task. A method is a function that belongs to an object.
