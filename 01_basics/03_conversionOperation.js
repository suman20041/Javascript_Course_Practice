let score =  "" //"33abc" //true//false //"suman" //undefined//null  //"33" 


//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true =>1; false=> 0
// "suman" =>NaN
// undefined =>NaN
//null => 0
//"" =>0




let isLoggedIn = null

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);


//1 => true; 0=> false
// "" =>false
// "suman" => true
// null => false
//undefined => false




let someNumber = true//"suman" //false //null//undefined//33  

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// 33 => 33
// undefined => undefined
//null =>null
//false => false
//true =>true
//"suman" => suman


//******************Opeartions*******************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2);
// console.log(2 / 3);
// console.log(2 % 3);  //modulus use in cryptograhy and algorithm

let str1 = "suman"
let str2 = " panda"

let str3 = str1+str2  //string concatination
// console.log(str3);

// console.log("1" + 2);      //output-12
// console.log(1 + "2");      //output-12
// console.log("1" + "2");    //output-12
// console.log("1" + 2 + 2);   //output-122
// console.log(1 + 2 + "2");   //output-32
//console.log(1 + 2 + "2"+2+2);   //output-3222

// console.log((3+4)*5%3);
// console.log(true);    //output-true
//console.log(+true);   //output-1
// console.log(true+);     //output-error
//console.log(+true+);   //output-error
// console.log(+"");       //ouput-0
//console.log(""+);    //output-error
//console.log(+""+);     //output-error



let num1,num2,num3

num1 = num2 = num3 = 2 + 2
let gameCounter = 100
// gameCounter++
++gameCounter
//console.log(gameCounter);


/*let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);*/
// Expected output: "x:4, y:3"
/*let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`);*/
// Expected output: "a:4, b:4"

// Link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
