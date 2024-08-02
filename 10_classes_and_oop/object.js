// Learning:

// new 
// this
// Object ane new vachche relation  
// function constructor bane reference bane 
// this keyword kai rite work kare reference (constructor fn) ni andar


function multipleBy5(num){
    return num++;

}

multipleBy5.power = 2;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);


function createUser(username, score){
    this.username = username;
    this.score = score;
    console.log(this);
}

// jisne bhi bulaya hain uske paas jao
createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}

const chai = new createUser("chai", 25);
const tea = createUser("tea", 250);

chai.printMe();




  