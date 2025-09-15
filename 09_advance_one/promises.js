//Promise create
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        //connect resolve and .then
        resolve()  //when resolve() execute after it connect .then
    }, 1000)
})

//Promise consume
//function automatic receive one argument.. whatever value is made  at the time create promise that value return here
promiseOne.then(function(){
    console.log("Promise consumed");
})


//Not store promises in any variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email:"chai@example.com"})   //parameter we pass data and this data my be object, array or function
    }, 1000)
})

promiseThree.then(function(user){  //this object we call as user which is present in resolve
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "suman", password: "123"})
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){   //handle error.. Those value return we call it as error
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});


//other way to accept promise
async function consumePromiseFive() {
    try {
        const response = await promiseFive  //promiseFive is object we can't consume this type promiseFive()
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

//try catch syntax
//async means give some response
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }   

// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
// fetch doesn’t immediately give you the response.
// Instead, it returns a Promise that will resolve once the HTTP request finishes.
// By writing await fetch(...), we pause execution inside the async function until the fetch request is done, and then assign the resolved response object to response.

// response.json()
// The response body is streamed, so .json() also returns a Promise.
// Using await response.json(), we wait until the JSON parsing is finished before assigning it to data.



//.then and .catch format
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))