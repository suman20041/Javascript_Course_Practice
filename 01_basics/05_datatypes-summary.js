//Primitive
// 7 types : String,Number, Boolean, null, undefned, symbol,BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

const bigNumber = 54265216127675127768567n

//Reference (Non-primitive)
// Array, Objects, Functions

const heros = ["suman", "Baisakhi", "Jharana"];
let myObj={
    name:"suman",
    age: 22,
}


const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);   //return undefined with comment bigint variable
console.log(typeof outsideTemp);  //return object
console.log(typeof myFunction);  //return object function
console.log(typeof heros);  // return object
console.log(typeof myObj);  // return object
console.log(typeof anotherId);  // return symbol
console.log(typeof isLoggedIn); // return boolean
console.log(typeof userEmail);  //return undefined
console.log(typeof scoreValue); // return number


// https://262.ecma-international.org/5.1/#sec-11.4.3




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(primitive), Heap(Non-primitive)

let myYoutubename = "sumanpandadotcom"

let anothername = myYoutubename
anothername="chaiaurcode"

// console.log(myYoutubename);
// console.log(anothername);



let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne   //give the value of userOne
userTwo.email= "suman@google.com"   //in object we access value by using .value like .email 
// console.log(userOne.email);
// console.log(userTwo.email);
