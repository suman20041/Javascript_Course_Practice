//array
// Array return type is object

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "nagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods
// myArr.push(6) //add the value at the end of a array. now the myArr varibale change one element add inside it.
// myArr.push(7)  
// myArr.pop(8)  //Remove the value at the end of a array
// myArr.unshift(9)  //add the value at the begging of a array. In this method problem is that in a array all value will be shift.
// myArr.shift()  //remove the value at the begging of a array.

// question array methods : execte only true or false
// console.log(myArr.includes(9));  //if value is present execute true and if value is absent return false.

// console.log(myArr.indexOf(9)); //if value is absent execute -1
// console.log(myArr.indexOf(3));  //if value is present execute index of this particular value.


// const newArr = myArr.join() //join method bind the array and convert to string
// console.log(myArr); // array execute in array format
// console.log(newArr);  // here change the return type to string
// console.log(typeof myArr);   
// console.log(typeof newArr);  // return type is string


// slice, splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("C ", myArr);
