// This is comparison operator and here we learn about conversion between different data type



// console.log(2>1);
// console.log(2<1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);


// Avoid this type of comparison 

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// console.log(undefined < 0)
// console.log(undefined >= 0)
// console.log(undefined == 0)


console.log("2" == 2)
console.log(1 === true);
console.log(1 == "true");


const myArray = ["Shaktiman", "Hanuman", "Mahaveeran"];
console.log(typeof (myArray));

const myObject = {
    "name":"Devkaran",
    "Age":22
}
console.log(typeof (myObject));

const myFunction = function(){
    console.log("Hello Worrld")
}

console.log(typeof (myFunction));


// Stack and Heap

// stack is primitive data type and in this it create copy of original data and Heap it is non premitive data type(Reference) so it give original data and make change in this



let myprimitive = "ChaiaurCode"

let secondPrimitive = myprimitive

secondPrimitive = "GoldBird Blogs"

console.log(myprimitive)
console.log(secondPrimitive)


let firstObject = 
{
    name: "Devkaran",
    age: 22
}

let secondObject = firstObject
secondObject.name = "Hitesh"

console.log(firstObject)
console.log(secondObject)