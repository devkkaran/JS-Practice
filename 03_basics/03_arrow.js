const user = {
    userName: "Devkaran",

    message: function (){
        console.log(`${this.userName} How Are You?`);
        console.log(this);
    }
}

// user.message();
user.userName = "Keshavbhai";
user.message();

console.log(this);  // not work in node environment

function chai(){
    let userName = "Geeta";
    console.log(this.userName)  //undefined
    console.log(this);
}

chai();
console.log(this); // empty string

console.log("<-------------------- Variable Function ----------------------->");


// const namePrint = function () {
//     let userName = "Geeta";
//     console.log(this.userName)  //undefined
//     console.log(this);
// }

// namePrint();

console.log("<-------------------- Arrow Function ----------------------->");
const namePrint = () => {
    let userName = "Geeta";
    console.log(this.userName)  //undefined
    console.log(this);
    console.log(userName);
}

namePrint();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }


const addFour = (num1, num2) => (num1 + num2);
addFour(44,44);
console.log(addFour(44,44));

const returnName = function(num1,num3){
    let obj = {username: "Vidhya"}
    console.log(obj.username);
}

returnName(3,5);


const anotherName = (num2, num5) => ({userName: "Laxmi"});

anotherName(12,23);
// console.log(anotherName(123,456));

const addTwo = (num1, num2) =>  num1 + num2     // use console
console.log(addTwo(23,23));

// Difference Between Explicit Retuen and Implicit Return 
// Explicit Return
const explicitAdd = (a, b) => {
    const sum = a + b; // some intermediate computation
    return sum;        // explicit return
};

const explicitResult = explicitAdd(3, 4);
console.log(explicitResult); // Output: 7

// Implicit Return
const implicitAdd = (a, b) => a + b; // implicit return

const implicitResult = implicitAdd(3, 4);
console.log(implicitResult); // Output: 7


const otherImplicitAdd = (a, b) => (a * b);

const otherImplicitAddResult = otherImplicitAdd(12,3)
console.log(otherImplicitAddResult);


const checkContradictAdd = (a, b, c) => {
    a + b + c;
}

const checkContradictAddResult = checkContradictAdd(3, 6, 9);
console.log(checkContradictAddResult);
