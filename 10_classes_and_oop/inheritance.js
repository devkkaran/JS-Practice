console.log("<-------------------- 44 Call & This in JS  ----------------------->");

class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}


class Teacher extends User{
    constructor(username, email, password){

        super(username);  //  username  is from another class like call here this work
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`New Course Was Added By ${this.username}`);
    }
}

const chai = new Teacher("Chai", "chai@gmail.com", '789654');

chai.addCourse();
chai.logMe();


console.log(chai instanceof Teacher);
console.log(chai instanceof User);
console.log(chai instanceof User);
