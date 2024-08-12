const myArr = [];
// %DebugPrint(myArr);

// Continious, Holey Array

// SMI (Small integer)
// Packed Element
// Double (float, string, function)

const arrTwo = [1, 2, 3, 4];  //PACkED_SMI_ELEMENTS

const arrThree = [1, 2, 3, 4, , 6];  //This has Hole

arrTwo.push(6.0) // PACKED_DOUBLE_ELEMENTS

arrTwo.push('7')  // PACKED_ELEMENtS

arrTwo[10] = 11;
// HOLEY_ELEMENTS (hole, number, int many types data tthat's why)

console.log(arrTwo);
console.log(arrTwo.length);

console.log(arrTwo[6]);

// bound Check
// hasownproperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10);
// hasOwnProperty(Object.prototype, 10)