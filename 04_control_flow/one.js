//if

// const isUserloggedIn = true
// const temprature = 41
// if(temprature === 41){
//     console.log("less than 50");
// }else{
//     console.log("Temperature is greater than 50");
// }

// console.log("Execute");
//<,>,>=,<=,==,!=,===, !==


// const score = 200
// if (score > 100) {
//     var power = "fly"  //var scope is completely global
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const score = 200
// if (score > 100) {
//     let power = "fly"  
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);



// const balance = 1000

//Implicit scope
//Executed only one line but we not write multiple line. We can write it in multiple line but it is unredable code.
// if (balance > 500) console.log("test");  //redable code
// if (balance > 500) console.log("test"),console.log("test2"); //unredable code

// if (balance < 500){
//     console.log("less than 500");
// }else if (balance < 750){
//     console.log("less than 750");
// }else if (balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }


//multiple condition check
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

//multiple and check
if (userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}

//multiple or check
if (loggedInFromGoogle || loggedInFromEmail ){
    console.log("User logged in");
}