console.log("1672. Richest Customer Wealth");

// Example 1:

// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.

function maxWealth($array) {
  let maxWealth = 0;
  for (let index = 0; index < $array.length; index++) {
    let numFor = 0;
    for (
      let secondIndex = 0;
      secondIndex < $array[index].length;
      secondIndex++
    ) {
      numFor += $array[index][secondIndex];
    }

    if (numFor > maxWealth) {
      maxWealth = numFor;
    }
  }
  return maxWealth;
}

let accountOf1 = [
  [1, 5, 8],
  [8, 9, 9],
];
let accountOf2 = [
  [7, 8, 6],
  [3, 6, 9],
];

console.log(maxWealth(accountOf1));
console.log(maxWealth(accountOf2));

console.log("<-------------------- 412. Fizz Buzz ----------------------->");
console.log("412. Fizz Buzz");

// Given an integer n, return a string array answer :

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]

var fizzBuzz = function (n) {
  const answer = ["FizzBuzz", "Fizz", "Buzz"];
  const result = [];
  let number = 1;
  while (number <= n) {
    if (number % 3 == 0 && number % 5 == 0) {
      result.push(answer[0]);
      number++;
    } else if (number % 3 === 0) {
      result.push(answer[1]);
      number++;
    } else if (number % 5 == 0) {
      result.push(answer[2]);
      number++;
    } else {
      result.push(String(number));
      number++;
    }
  }
  return result;
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(6));
console.log(fizzBuzz(9));

console.log(
  "<-------------------- 1342. Number of Steps to Reduce a Number to Zero ----------------------->"
);
console.log("1342. Number of Steps to Reduce a Number to Zero");

let numberOfSteps = function (num) {
    let value;
  
    let valueArray = [];
    do {
      if (num % 2 == 0) {
        value = num / 2;
        valueArray.push(value);
      } else {
        value = --num;
        valueArray.push(value);
      }
      num = value;
  
      console.log(value);
    } while (value > 0);
  
    console.log(valueArray.length);
    // return  valueArray.length;
  };

//   let numberOfSteps = function(num) {
//     let steps = 0;
  
//     while (num > 0) {
//       if (num % 2 === 0) {
//         num /= 2;  // If even, divide by 2
//       } else {
//         num -= 1;  // If odd, subtract 1
//       }
//       steps++;  // Count each step
//     }
  
//     return steps;
//   };
  
  console.log(numberOfSteps(7));   // Output: 4
  console.log(numberOfSteps(641)); // Output: 10
  console.log(numberOfSteps(8));   // Output: 4
  console.log(numberOfSteps(123)); // Output: 12
  console.log(numberOfSteps(14));  // Output: 6

  console.log("learn lexical scope");
  const check = numberOfSteps(10);
  console.log(check);

  const check1 = numberOfSteps;
  check1(15)





