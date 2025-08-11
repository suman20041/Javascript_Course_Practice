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


// const greetingss = "Hello World!"
// for (const greets of greetingss) {
//     const element = greets
//     if (element == " ") {
//         console.log("Space don't print");
//         continue;
//     }
//     console.log(`Each char is ${element}`);
// }


const greetingss = "Hello World!"
for (const greets of greetingss) {
    const element = greets
    if (element == " ") {
        // console.log("Space don't print");
        break;
    }
    // console.log(`Each char is ${element}`);
}



//Maps
const map = new Map()
map.set("IN", "India")
map.set("USA", "United States Of America")
map.set("Fr", "France")
map.set("IN", "India")

// console.log(map);

//for loop is  working on map because map is iterable
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