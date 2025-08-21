// Dates

let myDate = new Date()  //create Date() object which  instance is myDate 
// console.log(myDate);

// Each method convert date in some format
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString);
// console.log(myDate.toISOString);
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString);

// console.log(typeof myDate);  //Return type is object

// let myCreatedDate = new Date(2023, 0, 23)  //single digit month start 0 in js
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());


// let myCreatedDate = new Date("2023-01-14")  //Double digit month start 1 in js 
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2023")  // when we need date mm-dd-yyyy format
// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);  //This is the milisecond value from beginning of January 1, 1970 till now.
// console.log(myCreatedDate.getTime());   //The exact value convert in milisecond
//comparison always do in milisecond

console.log(Date.now());    //convert this value to milisecond
// console.log(Date.now()/1000);  // covert to second divide by 1000.But here problem is that it execute decimal value.
// console.log(Math.floor(Date.now()/1000));  // we do math.floor because i don't need decimal value

let newDate = new Date()
console.log(newDate);  //dont give any special information. we convert it as much as possible.
console.log(newDate.getMonth());  //here month start from 0.
// console.log(newDate.getMonth() + 1); //here index start from 0. End user don't want confuse so we add + 1 here.
console.log(newDate.getDay());   //curren day like sunday-0,monday-1, tuesday-2

// `${newDate.getDay()} and the time`

//more customize the format that we print the tolocalstring above. so we write this:
newDate.toLocaleString('default', {   //inside this method define object and multiple parameter
    weekday: "long",    //multiple property also define
    timeZone: ''
})  
