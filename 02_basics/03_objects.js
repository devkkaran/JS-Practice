// object literals

const mySum = Symbol("Key1");

const JsUser = {
    name: "Deva",
    "my name": "Devkaran K Vaghasiya",
    age: 19,
    isLoggedIn: true,
    things: ["Birth Certificate", "Aadhhar Card"],
    email:"dev@gmail.com",
    [mySum]: "myKey1" // access symbol data type


}

const emptyOb = {};
// emptyOb.[""] = "Dev";  // Not possible like php
console.log(emptyOb);
const tinderUser = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(JsUser["email"]);

console.log(JsUser.email);
console.log(JsUser["my name"]);
console.log(JsUser[mySum]);


// Object.freeze(JsUser);

JsUser.email = "vijay@gmail.com";
console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hello JS User");
}


JsUser.greeting2 = function(){
    console.log(`Hello I Am User ${this["my name"]}`);
    console.log(this.isLoggedIn);

}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());



