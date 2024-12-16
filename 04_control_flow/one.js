// const score = 800;

// if(score > 800){
//     const power = "FLY";
//     console.log("power");
// }

// console.log(`Power ${power}`);

const balance = 1000;
// this is short implicet method but it is not right practice
// Use ; and , in this 

if (balance > 500) console.log("test"), 
console.log("Test2");

if(balance > 500){
    console.log("This is Greater than 500");
}
else if(balance < 800){
    console.log("This is less than 500");
}
else{
    console.log("This is grater than 500");
}

const userLogedIn = true;
const debitCard = true;
const loggedFromGoogle = false;
const loggedFromEmil = true;

if(loggedFromGoogle || loggedFromEmil){
    // console.log("User Logged In");
    return "User Logged In"
}