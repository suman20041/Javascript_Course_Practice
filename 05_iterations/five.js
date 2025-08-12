const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach((item) => {
//     console.log(item);
// })


function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)  //Here we only give the function reference printing work done by themself. we not execute the function here.