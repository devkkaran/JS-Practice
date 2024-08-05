//ES 6

class User{
    constructor(userName, email, password){
        this.userName = userName;
        this.email = email;
        this.password = password;

    }
    // encryptPassword(){
    //     return `${this.password}abc`
    // }

    // changeUsername(){
    //     return `${this.userName.toUpperCase()}`
    // }


     
}

const chai = new User('chai', 'chai@gmail.com', '123456');

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());
// console.log(chai.encryptPassword().__proto__);


// Different Method

User.prototype.encryptPassword = function(){
    return `${this.password}abc`

}
User.prototype.changeUsername = function(){
    return `${this.userName.toUpperCase()}`
}
    
const tea = new User('tea', 'tea@gmail.com', '7891011');
    
console.log(tea.changeUsername());
console.log(tea.encryptPassword());