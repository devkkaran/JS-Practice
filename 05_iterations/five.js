const coding = ["js", "ruby", "java", "python", "cpp"];
const testNum = [1, 23, 56, 89, 78];

testNum.forEach((num) => {
    console.log(num > 5);
})

coding.forEach((name) => {
    console.log(name);
})

coding.forEach( function (item){
    console.log(item);
})

function printMe(name){
    console.log(name);
}

coding.forEach(printMe);
// coding.forEach("printMe");       // not work this

testNum.forEach((item, index, arr) => {
    console.log(item > 0, index, arr);
})

const myCoding = [
    {
        languageName: "Python",
        languageFileName: "py"
    },

    {
        languageName: "Java",
        languageFileName: "js"
    },

    {
        languageName: "PHP",
        languageFileName: "php"
    }
]

console.log(Object.keys(myCoding));

myCoding.forEach( (item, index, arr) => {
    console.log(item.languageFileName, index);
    console.log("\n", arr)
})