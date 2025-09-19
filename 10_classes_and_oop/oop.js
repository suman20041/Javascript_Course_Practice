//object literal 
//It is also basic unit
const user = {
    //property
    username: "Suman",
    loginCount:8,
    signedIn:true,

    //method
    getUserDetails: function(){
        console.log("Got user deatils from database");
        
    }

}

console.log(user.username);
console.log(user.getUserDetails()); // it is method getUserDetails so we need to execute() not onlly give reference
