//function declare
function multipleBy5 (num){
    this.num = num
    return num * 5;
}

// . access work in object... so function is also an object
multipleBy5.power = 2

console.log(multipleBy5(5))
console.log(multipleBy5.power)
console.log(multipleBy5.prototype); //prototype not only give you the method but also give you internal property + this conext...  give you the empty object need some reference and inside this reference store this.num

function createUser(username,score){
    // help of this set a current context
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)
}

const chai = new createUser("chai",25); //createuser function sai mai jab value transfer kari chai kai andar tho hum batai nehi ki kuch additional properties bhi load horaha hai aur ye batane ka kam karta hai new keyword
const tea = createUser("tea", 250);

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/