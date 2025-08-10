//for:A for loop in JavaScript is a way to repeat some code multiple times.

for (let i = 0; i <= 10; i++) {   //(initialization, condition check, increment& decrement)
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

// console.log(element); //This element variable not access on outside because element declare inside scope.


for (let i = 1; i < 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j < 10; j++) { //The inside of j access of i value because we are now inside scope
        // console.log(`Inner loop value ${j} and outer loop ${i}`);
        // console.log(i + " * " + j + " = " + i*j);
    }
}


let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {  // condition change because of index++.If we not write index++ then infinite times flask only print. 
    const element = myArray[index];
    // console.log(element);
}

//break and continue
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("Detected 5");
//         break  //in case of break if condition match then stop there and come outside of loop.
//     }
//     console.log(`Value if index is ${index}`);
    
// }


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue  //continue means if the condition will be match then skip it one time Then print the rest part. But doesn't come outside of loop.
    }
    console.log(`Value if index is ${index}`);
    
}
