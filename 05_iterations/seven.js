const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//in case of map this concept is not apply that those values will be satisfy the condition only that much of values will be return
// const newNums = myNums.map((num) => {return num + 10})
// console.log(newNums);


// const newNums = []
// myNums.forEach((num) => {
//     if(num > 0){
//         newNums.push(num + 10)
//     }
// })
// console.log(newNums);



//chaining method:-It means 2 or more method we can use directly
const newNums = myNums
    //when we do chaining the top method those result will come that goes to the next chaining
    //map method we explicitely return the values and this type of values perform operation
    .map((num) => num * 10)  //1st iteratiom
    .map((num) => num + 1)    //2nd iteration
    .filter((num) => num>=40 )  //filter we check the condition it is true or false
console.log(newNums);


