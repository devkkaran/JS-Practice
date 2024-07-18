const marvel_heroes = ['IronMan', "Captain AMerica", "Thor"];

const dc = ["batman", "superman", "flash"];

const hero = ["krish", "Shakalaka bumb bumb", "Rockey"];
// marvel_heroes.push(dc);

marvel_heroes[3] = "RanaVeer"; 
console.log(marvel_heroes);
console.log(marvel_heroes + dc); // converts in string 

console.log(marvel_heroes);

console.log(marvel_heroes["2"]); // we can write like this also and array in JS key always is index number not key in string like PHP


console.log(marvel_heroes.concat(dc, hero));

// Spread-out method
// const all_hero = [...marvel_heroes, ...dc];

// console.log(all_hero);

console.log(Array.isArray("123"));

console.log(Array.from("Dev\n karan")); // use iterable object in this 
console.log(Array.from(marvel_heroes)); 
console.log(Array.from({name:"Devkaran"}));  // intresting


console.log(Array.of(marvel_heroes));

const number1 = 12;
const number2 = 14;
const number3 =  15;

console.log(Array.of(marvel_heroes, number1));
