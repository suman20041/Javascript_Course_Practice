//class is one wrapper here under the hood work prototype
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}

const suman = new User("s@suman.ai", "123");
console.log(suman.password);
