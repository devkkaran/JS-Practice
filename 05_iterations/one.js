// for
for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);
    
}

// create table 
for (let i = 0; i <= 10; i++) {
        // console.log(`This value is from Outer Loop ${i}`);
        console.log(`This is ${i}'s  Table`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`This is From Inner Loop ${j} and This is from Outer Value ${i}`);

        console.log(i , '*', j, "=", i*j);
        
    }
    
}

let myArray = ["Tom Cruise",  "Dwayne Johnson", "Arnold"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

let myObject =  {
    languageName: "Python",
    languageFileName: "py"
};

console.log(myObject);

for (let index = 0; index < Object.keys(myObject).length; index++) {

    // console.log(myObject.languageFileName);
    console.log(Object.entries(myObject)[index]);
    // console.log(myObject[index]);
    // console.log(Object.keys(myObject));
    // console.log(Object.values(myObject));
    // console.log(Object.entries(myObject));
}

let arrayOfObjects = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];
for (let index = 0; index < arrayOfObjects.length; index++) {
    const obj = arrayOfObjects[index];
    console.log(Object.entries(obj));
    
    
}

console.log(Object.entries(arrayOfObjects));
console.log("\n");

for (let index = 0; index < arrayOfObjects.length; index++) {
    const obj = arrayOfObjects[index];
    const entries = Object.entries(obj);

    for (let j = 0; j < entries.length; j++) {
        console.log(entries[j]);
    
    }
}
