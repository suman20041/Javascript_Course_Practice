const User = {
    _email: "s@sp.com",
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);  //Still access the email but we have no property of email name
console.log(tea._email);  //we can also access _email
