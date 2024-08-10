"use strict"; 
let myDate = new Date();

console.log(myDate);
console.log(typeof myDate);
console.log(myDate.valueOf());


console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())
console.log(typeof myDate.toLocaleString())

// console.log(myDate.toString())

let numberDate = new Date(2024, 12, 12);
console.log(numberDate.toString());

let otherformDate = new Date(2024, 0, 13, 14, 12, 23);
console.log(otherformDate.toDateString());

let createDate = new Date("2024-04-12");
console.log(createDate.toLocaleString());

// let myCreatedDate = new Date();
// console.log(myCreatedDate);
// console.log(myCreatedDate.getTime());

let myNow = Date.now();
console.log(myNow);

const d = new Date("Mar 25 2015");
console.log(d.getTime());
console.log(d.getMonth());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getDay());

let arrayStart = ["Deva", "Rana", "Naidu"];
console.log(typeof arrayStart);

