//Promise create
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
    }, 1000)
})

//Promise consume
//function automatic receive one argument.. whatever value is made  at the time create promise that value return here
promiseOne.then(function(){
    console.log("Promise consumed");
})