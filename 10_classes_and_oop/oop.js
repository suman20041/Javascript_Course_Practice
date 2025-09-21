//object literal 
//It is also basic unit
const user = {
    //property
    username: "Suman",
    loginCount:8,
    signedIn:true,

    //method
    getUserDetails: function(){
        //console.log("Got user deatils from database");
        // console.log(`Username: ${this.username}`);

        //this keyword present in function context
        console.log(this);  // output: total object or current context
    }

}

//console.log(user.username);
// console.log(user.getUserDetails()); // it is method getUserDetails so we need to execute() not onlly give reference

//this keyword present in global context
// console.log(this);  // output is empty object{}



//Constructor function
//const promiseOne = new Promise()
//const date = new Date() //new keyword is constructor function and constructor function allow you to create multiple instances from a single object literal.. new keyword help to create new context.


//function run only once that have only one global execution context
function User(username, loginCount, isLoggedIn){
    // left hand side this.username value is a variable and right hand side username value is those parameter we pass value of this parameter
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    //output: 1st function definition load and create new execution context
    this.greeting= function(){
        console.log(`Welcome ${this.username}`);
    }

    //implicitely define by default return not requred to write return this
    return this
}

// const userOne = User("Suman", 12, true);
// const userTwo = User("Baisakhi",11, false); //userTwo override the value userOne so we use new keywoed.. That is in below code
// console.log(userOne);

const userOne = new User("Suman", 12, true);
const userTwo = new User("Baisakhi",11, false); 
console.log(userOne.constructor);  //inside userone everything is encapsulate now User is don't known suman is storeed in username property or any else
// console.log(userTwo);

// new creates an object and binds it to this inside the function.
// Assignments like this.username = ... add properties to that new object.
// The constructor returns the instance automatically — return this is unnecessary.
// userOne and userTwo are two independent objects with the properties you passed.


//instance of
// The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. 
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);   //without new keyword output is false
console.log(auto instanceof Car);
// Expected output: true
console.log(auto instanceof Object);
// Expected output: true
