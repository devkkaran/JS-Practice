const myObject = {
    js: "Java Script",
    PHP: "Pre Proceessor Hyper Text",
    cpp: "C++",
    swift: "Swift by Apple"
}

console.log(myObject);

for (const key in myObject) {
    
    console.log(`${key} short cut of ${myObject.key}`);
    
}

const myArr = ["JS", "PHP", "HTML", "CSS", "mySQL"];

// for (const key in myArr) {
//     console.log(key);
//     console.log(myArr[key]);
// }

// for (const [key, value] of myObject) {
    // console.log(`${key} - ${value}`);
// }

let arrayOfObjects = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];


const checkString = 'Devkaran';

// for (const key in checkString) {
//     console.log(checkString[key]);
// }

for (const key in arrayOfObjects) {
    console.log(key);
    console.log(arrayOfObjects[key]);
}






