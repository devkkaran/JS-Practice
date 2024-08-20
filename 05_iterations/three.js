// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 22, 33 , 44];

for (const key of arr) {
    console.log(`${key}`);
}

const greeting = "Hello World!";

for (const word of greeting) {
    console.log(word);
}


// Maps using For...Of loop 

const map = new Map();
map.set("IN", "India")
map.set("USA", "United States Of America")
map.set("Np", "Nepal")
map.set("AUS", "Australia")

console.log(map);
console.log(Object.keys(map));
console.log(map.keys());
console.log(typeof map);

console.log(map instanceof Object);
console.log(map instanceof Array);

// Use For...Of Loop in Map()
for (const value of map) {
    console.log(value);
}

for (const [key, value] of map) {
    console.log(`${key} || ${value}`);
}
console.log("Dev");

for (const [ key, value] of map) {
    console.log(`${key} shortcut of ${map[key]}`);
    // console.log(`${key} || ${value}`);
    console.log(key, "--", value);
}



// Use For...Of Loop in Object
let myObject = {
    languageName: "Python",
    languageFileName: "py"
};

console.log(myObject);
console.log(Object.entries(myObject));

for (let [key, value] of Object.entries(myObject)) {
    console.log(key + ": " + value);
}
console.log(Object.entries(myObject));
for (let key of Object.entries(myObject)) {
    console.log(key);
}

// Not possible beacuse it is not ierable --------------------------
// for (let [key, value] of myObject) {
//     console.log(key + ": " + value);
// }
// console.log(Object.entries(myObject));

// Use For..Of loop in Object in Array
let arrayOfObjects = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

for (let obj of arrayOfObjects) {
    console.log(`Name: ${obj.name}, Age: ${obj.age}`); 
}

// console.log(Object.entries(arrayOfObjects));