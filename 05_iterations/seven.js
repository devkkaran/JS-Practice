const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayMap = myNumbers.map(
    (num) =>  (
        num > 4
    )
)

console.log(arrayMap);

const addTen = myNumbers.map(
    (num) =>  (
        num + 4
    )
)

console.log(addTen);


// Difference Between Filter and Map Method

// 1. filter Method
// Purpose: To create a new array with elements that pass a test (i.e., satisfy a condition).
// Behavior: The callback function should return true or false. Only elements for which the callback returns true are included in the new array.



// 2. map Method
// Purpose: To create a new array by transforming each element according to the callback function.
// Behavior: The callback function should return a value that will be included in the new array. Each element is transformed according to the callback's return value.

const combineMapFilter = myNumbers
                                .map((number) => number * 10)
                                .map((number) => number + 1)
                                .filter((number) => number > 41)

console.log(combineMapFilter);      

console.log(myNumbers);