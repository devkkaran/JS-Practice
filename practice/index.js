console.log("1672. Richest Customer Wealth");

// Example 1:

// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.

function maxWealth($array){
    let maxWealth = 0;
for (let index = 0; index < $array.length; index++) {
        let numFor = 0;
    for (let secondIndex = 0; secondIndex < $array[index].length; secondIndex++) {

        numFor += $array[index][secondIndex];
    }
    
    if(numFor > maxWealth){
        maxWealth  = numFor;
    }
}
    return maxWealth;
}

let accountOf1 = [[1,5,8], [8,9,9]];
let accountOf2 = [[7,8,6], [3,6,9]];

console.log(maxWealth(accountOf1));
console.log(maxWealth(accountOf2));