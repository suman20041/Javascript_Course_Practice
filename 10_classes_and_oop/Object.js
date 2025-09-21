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
    score++
}

const chai = createUser("chai",25)
const tea = createUser("tea", 250)