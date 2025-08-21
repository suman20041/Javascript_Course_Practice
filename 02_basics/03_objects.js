//singleton
// Object.create   //constructor method

const mySym = Symbol("key1")
const mySym1 = Symbol("Key2")

//object literals
const JSUser = {
    name: "Suman",  //key pair like name,age behind the scene track as a string.
    "full name" : "Suman Panda",  //we can't access this value in . . so we access this value in [] notation.
    mySym:"myKey1",  //we cann't directly use symbol as a key mySym:"myKey1". so we use square notation in mySym.
    [mySym]: "myKey1",  // Storing symbol as a key
    [mySym1]: Symbol("myKey2"), //Storing symbol as a value
    age:18,
    location:"Jaipur",
    email: "suman@gmail.com",
    IsLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JSUser.email);  //value access from JSuser object
// console.log(JSUser["email"]);
// // console.log(JSUser.full name);  //This is not possible.
// console.log(JSUser["full name"]);

// Access Symbol
// console.log(JSUser.mySym); //we can't print the symbol like this. This is not process
// console.log(typeof JSUser.mySym);
// console.log(JSUser[mySym]);  //special case
// console.log(typeof JSUser[mySym]);
// console.log(JSUser[mySym1]);
// console.log(typeof JSUser[mySym1]);


JSUser.email = "suman@chatgpt.com"  //override means change the value
// Object.freeze(JSUser)  //lock the value of JsUser object after that value not be change.
JSUser.email = "suman@microsoft.com"
// console.log(JSUser);


JSUser.greeting = function(){  //function declare with no parameter accept
    console.log("Hello Js user");
}

JSUser.greetingTwo = function(){ 
    console.log(`Hello Js user, ${this.name}`);  //if we want to reference same object then use this . After we write this. the object whatever the propery is present that we will see here.
    // We use this because there are lot of object and those object we reference which property is present there.
}

// console.log(JSUser.greeting); //when object is freeze then that .greeting method execute undefined.
// console.log(JSUser.greeting());  //when the object is freeze the greeting() method give error.
// console.log(JSUser.greeting()); // when the object is not freeze then execute "Hello Js user" and undefined. Undefined will come when you give reference and then run.
// Calls the function and prints: Hello Js user
// console.log(JSUser.greeting);   //When the object is not freeze then function return back will be come. Function is not execute only fuction reference will come
// Prints the function reference: [Function (anonymous)]


console.log(JSUser.greeting);
console.log(JSUser.greetingTwo());
