console.log("<-------------------- 45 Class constructor and static  ----------------------->");

class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static creatId(){
        return '123';
    }
}

const keshav = new User('Keshavbhai');

console.log(keshav.logMe());  // because we already use console.log in funcion and outside we console to print that's why it gives "Undefined"

// Use Static
// console.log(keshavz.creatId());

keshav.logMe()


class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;

    }
}

const iphone = new Teacher('Iphone', "i@gmail.com")

// iphone.logMe();  
// console.log(iphone.creatId());  // can't Use
console.log(Teacher.creatId()); // Use
console.log(User.creatId());