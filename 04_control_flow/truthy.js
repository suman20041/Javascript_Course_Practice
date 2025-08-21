const userEmail = []

if (userEmail) {
    console.log("Got user Email");
}else{
    console.log("Don't have user email");
}

//falsy values
//false, 0 , -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false' , " ", [], {}, function(){} (empty function)

//To check the array is empty or not
if (userEmail.length === 0 ){
    console.log("Array is empty");
}

//To check the object is empty or not
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//Nullish Coalescing Operator(??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 //null come the return value.function execute and add the value.
//if value is present assign value.in case of value we add complex function and this function call datbase and value come from there.
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

//if our program null and undefined value then we don't known how this value will come.

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")

