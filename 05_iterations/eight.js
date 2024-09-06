const myNums = [1, 2, 3];

const myTotal = myNums.reduce(
    function (acc, curVal){

        console.log(`Acc: ${acc} and Value is ${curVal}`)
        return acc + curVal;
    }, 0)

    console.log(myTotal);

const total = myNums.reduce(
    (acc, curVal) => (acc + curVal)
    ,100)

console.log(total);

const course = [
    {
        itemName: "Python",
        price: 2000
    },
    {
        itemName: "JAVA",
        price: 3000
    },
    {
        itemName: "Java Script",
        price: 4000
    },
    {
        itemName: "Mobile Dev. COurse",
        price: 5000
    }

]

const totalPrice = course.reduce(
    (acc, curVal) => (acc + curVal.price),
0)

console.log(totalPrice);
