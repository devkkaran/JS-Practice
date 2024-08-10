// console.log("<-------------------- PromiseOne Object ----------------------->");

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task 1');
    }, 1000)
    // resolve();
});

// console.log(promiseOne);
// promiseOne.then(function(){
//     console.log('Async Task 1 is resolved');
// });

// console.log("<--------------------2nd Promise Object ----------------------->");

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task 2');
    }, 2000)
    resolve();
}).then(function(){
    console.log("Async Task 2 is resolved");
})

// console.log("<--------------------3rd Promise Object ----------------------->");

const promiseThree = new Promise((resolve, reject) => {
    console.log("Async Task 3");
    resolve({userName: 'Devkaran', password: 1234});
})

promiseThree.then(function (user){
    console.log(user);
    return user.userName; // print to this ue another then()
})

// console.log(promiseThree.then()); // not possible

// console.log("<--------------------4th Promise Object ----------------------->");
const promiseFour = new Promise((resolve, reject) => {
    let error = false;
    checkfn = function(){
        if(!error){
            resolve({userName: 'Vijayrag 4', password: 5555});
        }
        else{
            reject('Error: Something Went Wrong 4');
        }
        
    }
    setTimeout(checkfn, 3000)
    console.log('check 4');
})







promiseFour.
then( function (user){
    console.log(user);
    return user.userName; // print to this ue another then()
}).
then(function (userName) {
    console.log(userName);
})
.catch((error) => {
    console.log(error);
}).
finally(() => console.log('The Promise is either resolved or rejected'))

// console.log("<-------------------- 5th Promise Object ----------------------->");

const promiseFive = new Promise( function(resolve, reject) {
    let error = true;
    
    setTimeout(function(){
        if(!error){
            resolve({userName: 'JS', password: 40});
        }
        else{
            reject('Error: Something Went Wrong 5');
        }
        
    }, 6000)
});

// console.log("<-------------------- Async with Try & Catch ----------------------->");

async function consumePromiseFive () {
    // const response = await promiseFive;
    // console.log(response);

    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// console.log("<-------------------- Async with Fetch, Try & Catch ----------------------->");

async function  getUserAll(){
    // const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // const data = response.json();
    // console.log(data);
try{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    console.log(response);
    const data = await response.json();
    console.log(data);
}
catch(error){
    console.log('E: ', error);
}
}
// getUserAll();

// console.log("<-------------------- Async with Fetch, then & Catch ----------------------->");
fetch('https://api.github.com/user/hiteshchoudhary')
.then((response) => {
    
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})

// console.log("<-------------------- Async with  Promise, try & catch----------------------->");

// Function that simulates fetching data with a delay
async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Fetched Data"), 2000);
    });
}

// Async function using await to handle the promise
async function getData() {
    try {
        const data = await fetchData(); // Waits for fetchData to resolve
        console.log(data); // Logs "Fetched Data"
    } catch (error) {
        console.log("Error:", error); // Handles any error
    }
}

getData(); // Calls the async function
