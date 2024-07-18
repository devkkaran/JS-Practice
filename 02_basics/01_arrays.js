let myArray = [0,1,2,3,4,5];

myArray.push("Hitesh");
// myArray.pop();
// myArray.unshift(12);
myArray.shift();

console.log(myArray);
// console.log(myArray[1]);

// slice and splice

// console.log(`A ${myArray}`);
console.log("A", myArray);


const myn1 = myArray.slice(1,3);
console.log(myn1);

console.log("B", myArray);


const myn2 = myArray.splice(1,3);
console.log(myn2);

console.log("C", myArray);

