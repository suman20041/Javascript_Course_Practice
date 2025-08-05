// for of: Give the output value

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}



//Maps
const map = new Map()
map.set("IN", "India")
map.set("USA", "United States Of America")
map.set("Fr", "France")
map.set("IN", "India")

// console.log(map);

//for loop is not working on map because map is not iterable
for (const [key, value] of map) {
    // console.log(key, ":-", value);
}


const myObject = {
    game1:'NFS',
    game2:'spiderman'
}

//for of loop not working in object because object is not iterable
// for (const [key, value] of myObject) {
//     console.log(key, ":-", value);
// }