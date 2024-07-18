const name = "hitesh";
const age = 23;

console.log(name + age + "Value");


// String Interpotation
console.log(`He is ${name} and age is ${age}`)

const gameName = new String('Deva rana');

// console.log(gameName);
// console.log(gameName[1]);

// console.log(gameName.__proto__);


// console.log("Vijay");

console.log(gameName.length);
console.log(gameName.charAt(6));


// console.log(gameName.substring(0,4));
// console.log(gameName);

console.log(gameName.slice(-4,-3));

const newStringone = "    hitesh  ";

console.log(newStringone.trim());
console.log(newStringone);

const url = "https://devkaran.com/devkaran rana";
console.log(url.replace('%2', '-'));

console.log(url.includes('devkaran'));
// console.log(url.split('/'));
