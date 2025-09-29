//modern based syntax because we use property
//funstin based synatax... Just like fuction based syntax we also made object based syntax and also add getter and setter
function User(email, password){
    this._email = email,
    this._password = password

    // Object.defineProperty is a JavaScript method that lets you add a new property or change the behavior of an existing property on an object.
    //.defineProperty is a getter and setter property
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const chai = new User("chai@chai.com", "chai")
console.log(chai.email);
console.log(chai.password);
