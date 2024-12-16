const outerVariable = "Check if work or not";

function one() {
    const userName = "Deva";
    console.log(outerVariable);
    function Two() {
        const website = "Daily Live Khabar";

        console.log(website);
    }
    console.log(userName);
    Two();

}

one();


if (true) {
    const userName = "hitesh";

    if (userName === "hitesh") {

        const website = "Chai aur Code";
        console.log(userName + website);

    }

    // console.log(website);


    console.log(addOne(3));
    console.log(addTwo(5));
    // console.log(addThree(3));
    // addThree(12)
}

// console.log(userName);



function addOne(add) {
    return add + 1;
}

// console.log(addTwo(5));

const addTwo = function (add) {
    return add + 2;
}

const addThree = (num) => (num + 3);

const addFour = (num) => (num + 6);


