const user = {
    username: "suman",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()  //it is a method so we write paranthesis.
// user.username = "Baisakhi"
// user.welcomeMessage()

// console.log(this); //node environvemt this refer one empty object because in global not have any context.



// function chai(){
//     let username = "suman"
//     console.log(this.username);   //This context work only object but when come inside function we can not use this keyword like this.
// }
// chai()


// const chai = function(){
//     let username = "suman"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "suman"
//     console.log(this);
// }
// chai()



//function declaration help of arrow function
// const chai = () => {
//     let username = "suman"
//     console.log(this.username);    ///This context work only object
// }
// chai()

// const chai = () => {
//     let username = "suman"
//     console.log(this);      //execute empty object
// }
// chai()


// return num1 and num2 in arrow function
//Explicit return
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4));

//Implicit return
// const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1+num2)

//return object in arrow function
// const addTwo = (num1,num2) => {username:"suman"}   //output undefined.. In this way we not able to return object.so we use paranthesis
const addTwo = (num1,num2) => ({username:"suman"})

console.log(addTwo(3,4));

//arrow/classic function useful in loop
// const myArray = [2, 3, 4, 5, 6]
// myArray.forEach()
// myArray.forEach(function ()  {})
// myArray.forEach(() => {})
// myArray.forEach(() => ())
