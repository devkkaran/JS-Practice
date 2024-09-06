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

// console.log(expect1("Ramadhir Singh").toBe(5));
// console.log(expect1(5).notToBe(5));
// console.log(expect1(1).toBe("lsd"));

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
  console.error(error);
}

try {
  console.log(expect1(5).notToBe(5)); // This will throw an error
} catch (error) {
  console.error(error.message); // Output: "Error in notToBe: Equal"
}

console.log("<-------------------- 2665. Counter II ----------------------->");
console.log("2665. Counter II");

let createCounter = function (init) {
  let value = init;
  return {
    increment: function () {
      return ++value;
      // console.log(++value);
    },
    reset: function () {
      value = init;
      return value;
    },
    decrement: function () {
      return --value;
    },
    // return increment;
    // return reset;
    // return decrement;
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
counter.reset(); // 5
// console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4

console.log(createCounter(10).increment());

console.log(
  "<-------------------- 2635. Apply Transform Over Each Element in Array ----------------------->"
);
console.log("2635. Apply Transform Over Each Element in Array");

var map = function (arr, fn, index = 0) {
  function plusone(n) {
    return n + 1;
  }

  function plusI(n, index) {
    return n + index;
  }

  function constant() {
    return 42;
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn == "plusone") {
      result.push(plusone(arr[i], i));
    } else if (fn == "plusI") {
      result.push(plusI(arr[i], index));
    } else {
      result.push(constant(arr[i]));
    }
  }
  2;
  return result;
};

mapArray = [1, 2, 3, 4];
console.log(map(mapArray, "constant"));
console.log(map(mapArray, "plusI", 2));
console.log("<-------------------- 2nd. Method ----------------------->");

const maps = function (arr, fnName, forvalue = 0) {
  let array = [];

  // Define the internal functions
  function plusone(n) {
    return n + 1;
  }

  function plusI(n, i) {
    return n + i;
  }

  function constant() {
    return 42;
  }

  // Create a mapping of function names to the actual functions
  const functions = {
    plusone,
    plusI,
    constant,
  };

  // Check if the passed fnName exists in the functions map
  // if (!functions[fnName]) {
  //   throw new Error("Function not found");
  // }

  // Use the selected function to process each element
  arr.forEach((element, index) => {
    array.push(functions[fnName](element, index)); // Call the function by name
  });

  return array; // Return the new array
};

// Example usage
let mapArray1 = [11, 12, 13, 14];
console.log(maps(mapArray1, "plusone")); // [12, 13, 14, 15]
console.log(maps(mapArray1, "plusI")); // [14, 15, 16, 17]
console.log(maps(mapArray1, "constant")); // [42, 42, 42, 42]

console.log(
  "<-------------------- 2634. Filter Elements from Array ----------------------->"
);
console.log("2634. Filter Elements from Array");

function greaterThan10(n) {
  return n > 10;
}

function firstIndex(n, i) {
  return i === 0;
}

function plusOne(n) {
  return n + 1;
}

let filter = function (arr, fn, forValue = 0) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
      // result.push(fn(arr[i],  i)); // gives value according to return fn value
    }
  }

  return result;
};

let mapArray2 = [-11, -12, -1, -13, 0, 15, 16, -1];
console.log(filter(mapArray2, greaterThan10));
console.log(filter(mapArray2, firstIndex, 2));
console.log(filter(mapArray2, plusOne));

console.log(
  "<--------------------   2626. Array Reduce Transformation ----------------------->"
);
console.log("  2626. Array Reduce Transformation");

// function sum(accum, curr) {
//   return accum + curr;
// }

function sum(accum, curr) {
  return accum + curr * curr;
}

// function sum(accum, curr) {
//   return 0;
// }
var reduce = function (nums, fn, init) {
  let result = init;
  for (let i = 0; i < nums.length; i++) {
    init = fn(init, nums[i]);
    console.log(init);
  }

  return result;
};

nums = [1, 2, 3, 4];
console.log(reduce(nums, sum, 100));

var reduce1 = function (nums, fn, init) {
  if (nums.length === 0) {
    return init;
  }
  let accum = init;
  nums.forEach((i) => {
    accum = fn(accum, i);
    // console.log(accum);
  });
  return accum;
};

nums1 = [1, 2, 3, 4];
// console.log(reduce1(nums1, sum, 100));

console.log(
  "<--------------------   2629. Function Composition ----------------------->"
);
console.log("2629. Function Composition");

var compose = function (functions) {
  return function (x) {
    // if (!Object.keys(functions).length) {
    //   return x;
    // }
    // console.log(Object.keys(functions).length);

    let valueFromFn = functions.length - 1;
    for (let i = valueFromFn; i >= 0; i--) {
      // let fnFromArray = functions[i];
      // console.log(fnFromArray);
      // functions[0](valueOne);
      x = functions[i](x);
    }
    return x;
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9

const fn1 = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]);
console.log(fn1(1)); // 9

const fn2 = compose([]);
console.log(fn2(42)); // 9

var compose1 = function (functions) {
  return function (x) {
    // if (functions.length) {
    //   return x;
    // }

    functions.reverse().forEach((fn) => {
      x = fn(x);
    });
    return x;
  };
};

const fn3 = compose1([(x) => x + 1, (x) => 2 * x]);
console.log(fn3(4)); // 9

const fn4 = compose1([]);
const fn5 = compose1([]);
const fn6 = compose1([]);
const fn7 = compose1([]);
console.log(fn4(42)); // 9
console.log(fn5(142)); // 9
console.log(fn6(146)); // 9
console.log(fn7(69)); // 9
