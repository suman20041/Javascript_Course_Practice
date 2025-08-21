const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //push method work only existing array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// concat method return a new array
const allHeros = marvel_heros.concat(dc_heros)  
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// console.log(Array.isArray(another_array))//true. .isarray method check ths array is present or not.
console.log(Array.isArray("Suman")) //false
console.log(Array.from("Suman")) //.from method whatever values we give like object,string that convert to array.
console.log(Array.from({name: "Suman"}));  //Interesting.This object we can't directly convert array. so it execute empty array. 1st we need to mention we make array of keys or make array of values.



// Multiple variable convert to array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));// .of returns a new array from a set of elements. Set of elements are array or variable



// Assignment- Learn isArray,from,of