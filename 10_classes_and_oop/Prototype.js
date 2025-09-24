// let myName = "suman     "
// let myChannel = "chai     "

// // console.log(myName.trim().length)
// console.log(myName.trueLength());    //Those string have extra space that all string bydefault have this method .trueLength... but this line is not working here.



let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman:"sling",


    //method define
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.suman = function(){
    console.log(`suman is present is all objects`)
}

Array.prototype.heySuman = function(){
    console.log(`Suman says hello`);
}

// heroPower.suman()
// myHeros.suman()
// myHeros.heySuman()
// heroPower.heySuman()  //output:error


//inheritance

const User = {
    name: "Suman",
    email: "suman@google.com"
}

const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "sumanpanda      "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`This length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"chocolate".trueLength()
"iceCream".trueLength()
