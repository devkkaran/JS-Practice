console.log("<-------------------- 44 Call & This in JS  ----------------------->");

// With the call() method, you can write a method that can be used on different objects.

function setUsername(userName){
    // complex DB Calls
     this.userName = userName;
    console.log("Called");

    this.greeting = function(){
        console.log('Checking oF call() method');
    }
}  

// const checkSetUsername = new setUsername('Deva');
// console.log(checkSetUsername);


function createUser(userName, email, password){
    setUsername.call(this, userName);
        // setUsername(userName);
    //  new setUsername(userName);
    // execute karta gayab thay jaay che pn referebce hold nathi karta te karva .call()
    
    // this is global object
    this.email = email;
    this.password = password;
    console.log(this);
}

const chai = new createUser("Devkaran", "devkaran@gmail.com", "123");
chai.greeting(); // write this is extends for function constructor
console.log(chai);


let checkwoThis = function(name, day){
    console.log(name, day);
}
checkwoThis('dev', 6);

console.log("<-------------------- Object Literal ----------------------->");
// Use Of Call() method in Object Literal
const obj1 = {
    printFullName: function(){
        return this.firstName + " " + this.lastName;
    }
}
const obj2 = {
    firstName: 'Leela',
    lastName: "Veena"
    
}
const obj3 = {
    firstName: 'Vaishali',
    lastName: "Patel"
    
}

console.log(obj1.printFullName.call(obj2));
const checkBind = obj1.printFullName.bind(obj2);
console.log(checkBind());

console.log("<-------------------- Use setPrototypeOf instead of this .call() method  ----------------------->");
// use of setPrototypeOf in call() method
Object.setPrototypeOf(obj3, obj1);
console.log(obj3.printFullName());