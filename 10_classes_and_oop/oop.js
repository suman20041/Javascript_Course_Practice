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
const promiseOne = new Promise()
const date = new Date() //new keyword is constructor function and constructor function allow you to create multiple instances from a single object literal