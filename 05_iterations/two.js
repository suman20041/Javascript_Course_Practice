
//while: A while loop in JavaScript is used to repeat a block of code as long as a certain condition is true.
let index = 0
while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    //condition terminate the loop and exit the loop
    index = index + 2 
}



let myArray = ["flash", "batman", "superman"]
let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}


//do while: A do...while loop in JavaScript is a loop that runs the code at least once, and then keeps running it again and again as long as a condition is true.
let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

