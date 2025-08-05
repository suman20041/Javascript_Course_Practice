const accountId = 144553
let accountEmail = "suman@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"  //without write anything before the variable still we can reserve memory.In this way also we declare variable
let accountState;  //only declare varible but not assign any value

// accountId = 2  //not allowed

accountEmail = "su@gmail.com"
accountPassword = "232323233"
accountCity = "Banglore"

console.log(accountId);


/*
prefer not to use var
because of issue in block scope and functionl scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// const declare only one way use const keyword but variable declare in 2 way use var & let keyword.

