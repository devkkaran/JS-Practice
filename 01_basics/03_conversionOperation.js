let score =  undefined;


let valueToNumber = Number (score)
console.log(typeof valueToNumber)
console.log(valueToNumber)


// "Devkaran" => Nan
// "33" => 33
// undefined => NaN
// true => 1 , false => 0
// null => 0

let valueTocheck = undefined

let BooleanToCheck = Boolean (valueTocheck)
console.log(typeof BooleanToCheck)
console.log(BooleanToCheck)

// "Devkaran" => True
// "33" => True
// undefined => false
// true => 1 , false => 0
// null => false




// <--------------------------------------------Operation------------------------------------------------------------>
// Right Practis of Code - This is how to not write code
// Premitive Operation Datatype
console.log("1" + 3)
console.log(1 + 4 + "5");
console.log("5" + 4 +3);


// Increment Related How Post and Prefix operation works
let a = 3
console.log(a++)
console.log(a)
let y = a++               // post increment operation
console.log(a , y)


let c = 12
console.log(c++);
console.log(c)
