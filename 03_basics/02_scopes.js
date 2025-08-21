// var c =300
let a = 300

if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // d = 40
    // console.log("INNER: ",a); 
}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// for (let i = 0; i < array.length; i++) {  //we don't want that i value also available in gloabal scope
//     const element = array[i];
// }








// +++++++++++++++++ Scope Level and mini hosting+++++++++++++++++++++++++++
//function declaration
function one(){
    const username = "suman"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    //function call
    two()
}
one()


if (true) {
    const username = "suman"
    if(username === "suman"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


//++++++++++++++++++++++ interesting ++++++++++++++++++++
//Technique to create function

//only called function
//Here only declare a function
//Here we access the function before declaration
console.log(addone(5))
function addone(num){
    return num + 1
}

// function or expression
// Declare a function and hold in variable
//In this case we can't access the function before declaration
//This is a hosting where create execution context
addTwo(5)
const addTwo = function(num){
    return num + 2
}