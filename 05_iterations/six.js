const coding = ["Java Script", "ruby", "Python", "CSS"];

// const checkError = 
coding.forEach((value) => {
  console.log(value);
  // return value;
});

// console.log(checkError);
console.log(coding);
// const newValues = coding.forEach(
//     (value) =>
//         // console.log(value)
//          value

// )

// console.log(newValues);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const graterthanFour = myNums.forEach((myNum) => {
  return myNum > 4;
});

console.log(graterthanFour);

// const checkWithFilter =
myNums.filter((number) => {
  return number > 7;
});

// console.log(checkWithFilter);
console.log(myNums);

// Do this thing in forEach method
let newArray = [];
const donewithForEach = myNums.forEach((number) => {
  if (number > 4) {
    newArray.push(number);
    console.log(newArray);
  }
});


console.log(newArray);
console.log(donewithForEach);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

console.log("<-------------------- Only Function ----------------------->");

function booksGenre(num) {
  return num.genre === "Non-Fiction" ? num : false;
}

console.log(booksGenre(books));

function greatFour(num) {
  return num > 4 ? num : false;
}

console.log(greatFour(9));
console.log("<-------------------- Filter Function ----------------------->");

let filterBooks = books.filter((name) => name.edition >= 2000);

console.log(filterBooks);

console.log("<-------------------- ForEach Function ----------------------->");

let forEachBooks = books.forEach((name) => {
  console.log(name.edition >= 2000);
});

console.log(forEachBooks);
console.log("<-------------------- MAP Function ----------------------->");
let mapFiterBooks = [];
let mapBooks = books.map(
  // (book) => {
  //   if(book.genre == "Non-Fiction"){
  //         console.log(book)}
  // }
  (name) => name.edition >= 2000
);

console.log(mapBooks);

filterBooks = books.filter((name, index) => {
  console.log(index);
  
  return name.genre == "History" || name.genre == "Science";
});

console.log(filterBooks);
