const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(typeof balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 1.238966;
console.log(otherNumber.toPrecision(2));
console.log(typeof otherNumber.toPrecision(2));
console.log(typeof otherNumber);


const hundreads = 10023456;
console.log(hundreads.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++


console.log(Math);

console.log(Math.abs(-3.33));
console.log(Math.ceil(3.3475757));
console.log(Math.floor(3.2));
console.log(Math.min(4,3,2,8));
console.log(Math.max(4,3,2,8));

let ab = (4,3,2,8);
console.log(ab);
const min = 10;
const max = 20;

console.log(Math.random()*10 + 1)
console.log(Math.floor(Math.random() * (max - min)) + min);