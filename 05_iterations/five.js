const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach((item) => {
//     console.log(item);
// })


// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)  //Here we only give the function reference printing work done by themself. we not execute the function here.


// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        languageName:"javaScript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
]

myCoding.forEach((item)=> {
    console.log(item.languageName);
})