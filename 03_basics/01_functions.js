
function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("M");
    console.log("A");
    console.log("N");
}

// sayMyName()
// sayMyName



// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3,4)
// addTwoNumbers(3, "4")
// addTwoNumbers(3, "a")
// addTwoNumbers(3,null)



// function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//     return result
// }

// const result = addTwoNumbers(3,4)
// console.log("Result: ", result);




// function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//     return result
//     console.log("suman");
// }

// const result = addTwoNumbers(3,4)
// console.log("Result: ", result);



// function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//     console.log("suman");
//     return result
// }

// const result = addTwoNumbers(3,4)
// console.log("Result: ", result);



function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,4)
// console.log("Result: ", result);



function loginUserMessage(username = "kiran"){ //We give the default value kiran. We not goes inside if block.Because username value not undefined here. If we not put any value,bydefault it take as kiran value. if we passed any value then it ovrride the value kiran.
    // if(username === undefined){
    if(!username){  //how take parameter
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// loginUserMessage("suman")  // return the value but not print the return value.
// console.log(loginUserMessage("suman"))  //Those value return that will be print. Default value of userername override the value suman.
// console.log(loginUserMessage("")); //if pass empty string then nothing execute. That is totally empty.
// console.log(loginUserMessage());  //if value is not passed here then it is execute undefined. If user is not passed anything then we give default value.







//+++++++++++++++ functions in objects and array++++++++++++++++++++++++++

// Shopping card we don't know how many argument user pass(user continuosly add items) according to argument we pass our parameter.

function calculateCartPrice(...num1){  //Important is how parameter pass
    return num1
}
// console.log(calculateCartPrice(200,400, 500, 2000))



function calculateCartPrice(val1, val2,...num1){  
    return num1
}
// console.log(calculateCartPrice(200,400, 500, 2000))


//object pass inside the function
//This method if you handle object then check type safety those price we extract that actuaaly available in object or not.and those value we pass actually this data type is object or not. so prefer typescript.
//It is not necessary that make a object and pass this. We can pass the object directly
const user = {
    username:"Suman",
    // prices:199  
    price:199
}

function handleObject(anyobject){  //we give anyobject because we not only pass user object instead of that we can pass any object
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
    
}

// handleObject(user) //here we pass the compulsory object

//pass the object directly
handleObject({
    username:"Baisakhi",
    price:399
})




//array pass inside the function
const myNewArray = [200,400,100,600]  //array pass put inside variable

function returnSecondValue(getArray){
    // return myNewArray[0]  //not write myNewArray[] because it is a generic name.Anything could have been array above.I have to pay attention that what argument is coming to me i.e getArray.
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));

//here pass array directly
console.log(returnSecondValue([200,400,500,1000]));
