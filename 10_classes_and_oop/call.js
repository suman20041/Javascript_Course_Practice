function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
    
}

function craeteUser(username, email, password){
    //SetUsername(username)  // here we give the reference, properly call the SetUsername method but no useful
    SetUsername.call(this, username) //after execute we not disappeared this function, we hold the reference... To hold the reference the method is .call
    this.email = email
    this.password = password
}

const chai = new craeteUser("chai", "chai@fb.com", "123")
console.log(chai);