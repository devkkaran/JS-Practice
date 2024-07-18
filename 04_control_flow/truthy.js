// which values assume falsy and truthy values 
// const mySum = Symbol("Key1");


const userEmail = new Array();

if(userEmail){        // we doesn't compare with other thn how this evaluate
    console.log("Got User Email");

}
else{
    console.log("Don't have user Email");
}

// console.log(null);
// "h@devkaran.ai" => true;
//     "" => false;
//      []  => true;
//      {} => true;
//       undefined => false;

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

// "0", 'false', " ", [], {}, function(){}, true

const mySum = Symbol("Key1");
const emptyObj = {
    name: "Deva",
    "my name": "Devkaran K Vaghasiya",
    age: 19,
    isLoggedIn: true,
    things: ["Birth Certificate", "Aadhhar Card"],
    email:"dev@gmail.com",
    [mySum]: "myKey1" // access symbol data type


};

console.log(emptyObj);
if(Object.keys(emptyObj).length == 0){
    console.log("Object is empty");
}
else{
    console.log(Object.keys(emptyObj));
    // console.log(Object.values(emptyObj));
    // console.log(Object.entries(emptyObj));
}

const symbols = Object.getOwnPropertySymbols(emptyObj);
    console.log("Symbols:", symbols);

// Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 12 ?? 369;
val1 = null ?? undefined;
val1 = 369 ?? null;
val1 = 4898 ?? undefined;


let emptyObject = new Object();
console.log(val1);

// Terniary Operator

// condition? true : false;

// object n value numbr ma aav jyare true bolean che ane aa be different data type compare na thay mate te dhyan rakhvu 
(Object.keys(emptyObj).length == 0) ? console.log("Object is Empty"): console.log("Object is not Empty");

console.log(Object.keys(emptyObj).length);
console.log(Object.values(emptyObj).length);

let checkBool = true;
console.log(checkBool.length);
