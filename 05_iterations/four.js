//for in - Give the output key

//In object we add key as much we wish
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]  //in array key start from 0 and by default number
for (const key in programming) {
    // console.log(programming[key]);
}


// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "United States Of America")
// map.set("Fr", "France")
// map.set("IN", "India")

//for in loop is not working in map because map is not iterable
// for (const key in map) {
//     console.log(key);
// }