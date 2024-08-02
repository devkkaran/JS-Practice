console.log("<-------------------- Object Literal: ----------------------->");

const user = {
    userName : 'Devkaran',
    loginCount: 6,
    signedIn: true,

    getUserDetails: function(){
        console.log(`${this.userName}`);
        console.log(this);   // this gives object o properties and values of Object's Properties and values that's why in User Object it gives under {} values
    }
}

console.log(user.getUserDetails())
console.log(user.userNAame)


// When We Use this in browser it gives context of global Windiw Object and gives Proprties and method
console.log(this);

console.log("<-------------------- Constructor Function: ----------------------->");
// simple this function ma rakhta khali tenu property and method aavti parantu nicheni jem badham this. use karta function object thai gayu ane pachi te this print karta aakha Objetc ni jem badhi method ane property ape che. 

function User(userName, loginCount, signedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.signedIn = signedIn
        // console.log(this)
    this.greeting = function(){
        console.log(`Welcom to ${this.userName}`);
    }
    // return this;
}

const userOne =   new  User('Devkaran', 23, true);
const userTwo =  new    User('VijayRaj', 23, true);
userOne.greeting();
userTwo.greeting();
userOne.greeting();
console.log(userOne);
console.log(userTwo);

console.log("<-------------------- Constructor & Function are both same then why can't we do this with simple function ----------------------->");

// In summary, use closures when you need encapsulation and private state. Use constructor functions and the new keyword when you need to create multiple instances with their own state and shared methods.

function add(a, b){
    this.a = a;
    this.b = b;
    this.c = this.a+ this.b;
    
    // return this;
}

const add1 =  add(56,56);
const add2 =  add(1,2);

console.log(add1);
console.log(add2);




console.log("<-------------------- ES6 Class: ----------------------->");
class admin{
    constructor(userName, loginCount, signedIn){
        this.userName = userName;
        this.loginCount = loginCount;
        this.signedIn = signedIn;


    }
    getUserDetails(){
            console.log(`Username ES6: ${this.userName}`);
    }
}

const userThree = new admin('Keshavbhai', 56, true);
const userFour = new admin('Geetaben', 46, true);

userThree.getUserDetails();
userFour.getUserDetails();


