// Immediately Invoked Function Expressions (IIFE)

(function pati(){
    console.log("Immediately Invoked Function");

})();

// pati();

((name) => {
    console.log("DEV & VIjay", name);

    })("Are Brothers")


const checkFun = (function(whatCheck){
    console.log("Return to check", whatCheck);
    
})("Nothing")