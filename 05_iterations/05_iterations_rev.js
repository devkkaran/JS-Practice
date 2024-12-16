// Table
for (let index = 0; index <= 10; index++) {
  console.log(`This is ${index} Table`);
  for (let j = 0; j <= 10; j++) {
    console.log(index, "*", j, "=", index * j);
  }
}

const name = ["Vanilla Sky", "Formula 10", "MI:6", "Jack Reacher", "Oblivion"];

for (let index = 0; index < name.length; index++) {
  const element = name[index];
  console.log(element);
}

const book = {
  book: "Python",
  shortName: "PY",
};

for (let index = 0; index < Object.keys(book).length; index++) {
  // const element = Object.keys(book)[index];
  // const element = Object.entries(book)[index];
  const element = Object.values(book)[index];
  console.log(element);
}

const arrayOfObjects = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

for (let index = 0; index < arrayOfObjects.length; index++) {
  const obj = arrayOfObjects[index];
  const element = Object.entries(obj);

  for (let j = 0; j < element.length; j++) {
    console.log(element[j]);
  }
}

const arrayOfmy = ["deva", "krishna", "rana", "vijay"];

let arr = 0;

while (arr < arrayOfmy.length) {
  console.log(arrayOfmy[arr]);
  arr++;
}

do {
  console.log(arrayOfmy[arr]);
  arr++;
} while (arr < arrayOfmy.length);

const arr1 = [22, 33, 66, 99, 88];

for (const element of arr1) {
  console.log(element);
}

const str1 = "Hello World";

for (const element of str1) {
  console.log(element);
}

let myObject = {
  languageName: "Python",
  languageFileName: "py",
};

for (const element of Object.entries(myObject)) {
  console.log(element);
}

console.log(Object.entries(myObject));

for (const [key, value] of Object.entries(myObject)) {
  console.log(key, "+", value);
}

for (const key of Object.entries(myObject)) {
  console.log(key);
}

let arrayOfObjects1 = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

for (let obj of arrayOfObjects) {
  console.log(`Name: ${obj.name}, Age: ${obj.age}`);
}

const map = new Map([
  ["IN", "India"],
  ["US", "USA"],
  ["BNG", "Bangladesh"],
]);

console.log(map);
console.log(typeof map);
console.log(map instanceof Object);
console.log(map instanceof Array);

console.log(map.get("IN"));
console.log(map.get("US"));
console.log(map.get("BNG"));

for (const element of map) {
  console.log(element);
}

const coding = ["js", "ruby", "java", "python", "cpp"];
const testNum = [1, 23, 56, 89, 78];

const value1 = coding.forEach((item, index, arr) => {
  console.log(item);
});

function printMe(name) {
  console.log(name * 3);
}

testNum.forEach(printMe);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const editedNum = myNumbers
  .map((num) => num * 12)
  .map((num) => num - 2)
  .filter((num) => 
    num > 0
  );
