const name = "suman"
const repoCount = 50

// console.log(name + repoCount + " Value"); //string concatination


// This synatx follow not follow the above syntax
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //use backtish write string inside it, this is called stringinterpolation.We can also directly inject the variable.We dirctly add the method also.This is more rediable and reliable.


// string declare
const gameName = new String('suman-sp')      //inside the constructor we give name sumansu. 
// new String('suman-sp')  -->it creates a string object new String(), wrap around the  primitive string 'suman-sp'.
// const gameName = new String('suman-sp'); --->The gameName variable is assigned a String object that wraps around the primitive string "suman-sp". 
// const gameName: The const keyword means the variable gameName cannot be reassigned to a new value.   However, since gameName is an object (not a primitive), its properties and methods can still be modified. 
//String is not print array. String is object here.                 
//new keyword we use means use object.

//0th position means it is not array... string is object here
//0:"s"
//1:"u"



// console.log(gameName[0]);  //In this property access the key-value pair
// console.log(gameName.__proto__);   //access the property. It execute object

// console.log(gameName.length);  //Access the length property



// We can also access the prototype method. All method are function.
// console.log(gameName.toUpperCase());    //It not change the original string because it is a primitive datatype.(stack)
// console.log(gameName.charAt(2));    //Used at this index which character is present
// console.log(gameName.indexOf('t'));    //This character present in which position(means index).If this character is not resent then return -1.
// console.log(gameName.indexOf('m'));     //This character present in 2nd index.

// console.log(gameName.substring(0,4)) //starting from the start index but stop before the end index
// console.log(gameName.substring(-8,4));  //it automaticaly ignore the negative value and start from 0.
// or
const newString = gameName.substring(0,4)  
// console.log(newString);

const anotherString = gameName.slice(-8,4)  //in slice method we also give the negative value. When we give -ve value it start from reverse
// console.log(anotherString);

const newStringOne = "     suman    "
// console.log(newStringOne);  //This method execute the string with extra space.
// console.log(newStringOne.trim());  //This method help to remove extra space from starting and ending. trimStart() and trimEnd() method also present.

const url = "https://suman.com/suman%20panda"
// console.log(url.replace("%20", "-"))
// console.log(url.includes('suman'))  //Keyword present so true 
// console.log(url.includes('baisakhi'))  //Keyword is absent so false

// Convert this string to array. Split this part based on dash or space
const gameNameOne = new String('suman-sp-com') 
console.log(gameNameOne.split('-'));




// string methods and property
// length: 8
// [[Prototype]]: String
// anchor: ƒ anchor()
// at : ƒ at()
// big: ƒ big()
// blink: ƒ blink()
// bold: ƒ bold()
// charAt: ƒ charAt()
// charCodeAt: ƒ charCodeAt()
// codePointAt: ƒ codePointAt()
// concat: ƒ concat()
// constructor: ƒ String()
// endsWith: ƒ endsWith()
// fixed: ƒ fixed()
// fontcolor: ƒ fontcolor()
// fontsize: ƒ fontsize()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// isWellFormed: ƒ isWellFormed()
// italics: ƒ italics()
// lastIndexOf:ƒ lastIndexOf()
// length: 0
// link: ƒ link()
// localeCompare: ƒ localeCompare()
// match: ƒ match()
// matchAll: ƒ matchAll()
// normalize: ƒ normalize()
// padEnd: ƒ padEnd()
// padStart: ƒ padStart()
// repeat: ƒ repeat()
// replace: ƒ replace()
// replaceAll: ƒ replaceAll()
// search: ƒ search()
// slice: ƒ slice()
// small: ƒ small()
// split: ƒ split()
// startsWith: ƒ startsWith()
// strike: ƒ strike()
// sub: ƒ sub()
// substr: ƒ substr()
// substring: ƒ substring()
// sup: ƒ sup()
// toLocaleLowerCase: ƒ toLocaleLowerCase()
// toLocaleUpperCase: ƒ toLocaleUpperCase()
// toLowerCase: ƒ toLowerCase()
// toString: ƒ toString()
// toUpperCase: ƒ toUpperCase()
// toWellFormed: ƒ toWellFormed()
// trim: ƒ trim()
// trimEnd: ƒ trimEnd()
// trimLeft: ƒ trimStart()
// trimRight: ƒ trimEnd()
// trimStart: ƒ trimStart()
// valueOf: ƒ valueOf()
// Symbol(Symbol.iterator): ƒ [Symbol.iterator]()

