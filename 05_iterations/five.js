const coding = ["js", "ruby", "java", "python", "cpp"];

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

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
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