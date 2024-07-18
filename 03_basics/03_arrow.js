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


// const addTwo = (num1, num2) => (num1 + num2);

// console.log(addTwo(23,149));

const returnName = function(num1,num3){
    let obj = {username: "Vidhya"}
    console.log(obj.username);
}

returnName(3,5);


const anotherName = (num2, num5) => ({userName: "Laxmi"});

console.log(anotherName(123,456));