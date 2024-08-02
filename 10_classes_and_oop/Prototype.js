// Prototype Inheritance

// direct String & Object ni add method

// be Object ma 1 object bija object ni method and property use karta sikhya



let myName = "hitesh    ";


// console.log(myName.trueLength());


let myHeros = ['shaktiman', 'IronMan'];

let heroPower = {
    shaktiman: 'Yoga',
    IronMan: 'Metal',

    getshaktiPower: function(){
        console.log(`Shakti is ${this.shaktiman}`)
    }
}

Object.prototype.devkaran = function(){
    console.log("Devkaran Present in All Object");
}

Array.prototype.heyDevkaran = function(){
    console.log('Devkaran Says Hello From Array');
}

heroPower.devkaran();
myHeros.devkaran();
// heroPower.heyDevkaran(); //Not work in object

myHeros.heyDevkaran();


// Inheritance

const user = {
    name: 'Chai',
    email: 'chai@gmail.com'

}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

// Teacher ne user ni method ane property no access aapyo che
Teacher.__proto__ = user;  
console.log(Teacher.makeVideo);


//modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher);

Object.setPrototypeOf(Teacher, TeachingSupport);
console.log(Teacher.isAvailable);



let  anotherUsername = "Sainth Holidays      ";

String.prototype.truelength = function(){
    console.log(`${this}`);  // Object ni properties ane Method
    console.log(`True length is ${this.trim().length}`);
}

//  Jisne Call kiya wo this hain
anotherUsername.truelength();
"Keshavbhai".truelength();
"Geetaben".truelength();