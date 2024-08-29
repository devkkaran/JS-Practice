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

console.log(numberOfSteps(7)); // Output: 4
console.log(numberOfSteps(641)); // Output: 10
console.log(numberOfSteps(8)); // Output: 4
console.log(numberOfSteps(123)); // Output: 12
console.log(numberOfSteps(14)); // Output: 6

console.log("learn lexical scope");
const check = numberOfSteps(10);
console.log(check);

const check1 = numberOfSteps;
check1(15);

console.log(
  "<-------------------- 876. Middle of the Linked List ----------------------->"
);
console.log("876. Middle of the Linked List");

var middleNode = function (head) {
  let middleLinkedlist = [];

  let arrayLength = head.length;
  console.log(arrayLength);

  let middleValue = Math.floor(arrayLength / 2);
  console.log(middleValue);

  for (const key in head) {
    if (key >= middleValue) {
      middleLinkedlist.push(head[key]);

      console.log(key);
    }
  }

  return middleLinkedlist;
  // console.log(typeof middleLinkedlist);
};

head = [1, 2, 3, 4, 5, 6];
head1 = [11, 12, 13, 14, 15];
//  middleNode(head);
console.log(middleNode(head));
console.log(middleNode(head1));

var middleNode1 = function (head) {
  let middleValue = Math.floor(head.length / 2);
  return head.slice(middleValue);
};

let head2 = [21, 22, 23, 24, 25];
console.log(middleNode1(head2));

console.log("<-------------------- 383. Ransom Note ----------------------->");
console.log("383. Ransom Note");

var canConstruct = function (ransomNote, magazine) {
  ransomNote = Array.from(ransomNote.toLowerCase());
  magazine = Array.from(magazine.toLowerCase());
  for (let key of ransomNote) {
    if (magazine.includes(key) == false) {
      return false;
    } else {
      let index = magazine.indexOf(key);

      //  console.log(magazine.splice(index, 1));
      magazine.splice(index, 1);
      // console.log(magazine);
    }
  }

  return true;
};

console.log(canConstruct("asd", "sad"));
console.log(canConstruct("ert1", "ert1"));
console.log(canConstruct("asdf", "ghjk"));
console.log(canConstruct("aaasw", "wsa"));
console.log(canConstruct("12qw", "QW21"));

// console.log(canConstruct('deva', 'eva'));

// function canConstruct(ransomNote, magazine) {
//   for (let char of ransomNote) {
//       if (magazine.includes(char)) {
//           magazine = magazine.replace(char, ''); // Remove the character once it's used
//       } else {
//           return false;
//       }
//   }
//   return true;
// }

var createHelloWorld = function () {
  return function (...args) {
    console.log("Hello World");
  };
};

const greeting = createHelloWorld();
greeting([{}, null, 42]);

console.log(
  "<-------------------- 2704. To Be Or Not To Be ----------------------->"
);
console.log("2704. To Be Or Not To Be");

var expect = function (val) {
  return function toBe(anotherVal) {
    const Obj = {};
    let key;
    let Value;
    if (val === anotherVal) {
      key = "value";
      Value = true;
      Obj[key] = Value;

      return Obj;
    } else {
      // return "Not Equal";
      // key = "Not Equal";
      // console.log(key);

      key = "error";
      Value = "Not Equal";
      Obj[key] = Value;
      return Obj;
    }
  };

  return function notToBe(anotherVal) {
    if (val !== anotherVal) {
      // return true;
      // Value = "true";
      // console.log(Value);

      key = "value";
      Value = true;
      Obj[key] = Value;

      return Obj;
    } else {
      key = "error";
      Value = "Equal";
      Obj[key] = Value;

      return Obj;
    }
  };
};

// console.log(expect(5).toBe(5));

const toBe1 = expect("asd");
// const notToBe1 = expect(5);

console.log(toBe1(5));
// console.log(notToBe1(5));
// console.log(notToBe1('Fakir'));

// console.log(expect("Ramadhir Singh").toBe(5));
// console.log(expect(5).notToBe(5));

var expect2 = function (val) {
  return {
    // function toBe(anotherVal) {
    toBe: function (anotherVal) {
      if (val === anotherVal) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },

    notToBe: function (anotherVal) {
      if (val !== anotherVal) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };

};

console.log(expect(1));

console.log(expect1("Ramadhir Singh").toBe(5));
console.log(expect1(5).notToBe(5));
console.log(expect1(1).toBe("lsd"));

var expect1 = function (val) {
  return {
    toBe: function (anotherVal) {
      if (val === anotherVal) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (anotherVal) {
      if (val !== anotherVal) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

try {
  console.log(expect1(5).toBe(5)); // Output: true
} catch (error) {
  console.log(error);
}

try {
  console.log(expect1(5).notToBe(5)); // This will throw an error
} catch (error) {
  console.error(error.message); // Output: "Error in notToBe: Equal"
}
