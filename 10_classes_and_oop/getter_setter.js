// Look good syntactically- here we give own customize method like we give the decrepted password or encrypted password
//class is one wrapper here under the hood work prototype
class User {  
    constructor(email, password) {   //constructor only set the value of email  not password, because i override the password
        this.email = email;
        this.password = password;
    }

    // .email and ._email both are different...  ._email is a private property only access inside class

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){  //In all the properties getter and setter automatically made as a method
        return `${this._password}suman` //give different property name and override the password
    }

    set password(value){
        this._password = value //give different property name and override the password
    }
    //database when i save value then exact value set but in get if someone want to access this value then not given exact value
}

const suman = new User("s@suman.ai", "abc");
console.log(suman.password);
console.log(suman._email);
