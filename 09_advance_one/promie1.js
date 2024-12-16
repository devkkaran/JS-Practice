console.log("<-------------------- Promise 1 ----------------------->");

async function getUserAll() {
  try {
    // Attempt to fetch data from the API
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Check if the response is not OK
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Simulate an error by trying to access a property that doesn't exist
    const data = await response.json();
    console.log(data);

    // Intentional error: trying to access a property of undefined
    console.log(data.nonExistentProperty.length); // This will throw an error if `data.nonExistentProperty` is undefined
  } catch (error) {
    // Handle errors, including those from JSON parsing or logical errors
    console.log("Caught an error:", error.message);
  }
}

// getUserAll();
console.log("<-------------------- Promise 2 ----------------------->");
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promise 1 is resolved");
    resolve();
  }, 3000);
});

promiseOne.then(function () {
  console.log("Async task one is connect with resolve and consumed");
});
console.log("<-------------------- Promise 3 ----------------------->");
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("Promise 3 is resolved");
    resolve({ userName: "Devkaran", email: "dev@gmail.com" });
  });
}).then(function (user) {
  console.log(user.userName);
});
console.log("<-------------------- Promise 4 ----------------------->");
const promiseFour = new Promise((resolve, reject) => {
    let error = false;
    if (!error) {
        resolve({ userName: "Vijayraj", email: "vijay@gmail.com" });
    }
});

const promiseValue = promiseFour.then(function (user) {
    console.log(user.userName);
    return user.userName;
});

console.log(promiseValue);
console.log("<-------------------- Promise 5 ----------------------->");
const promiseFive = new Promise((resolve, reject) => {
    let error = true
    if(!error){
        resolve("Promise is resolved")
    }else{
        reject("Promise is rejected in testing")
    }
})

async function promiseFiveCheck(){
    try{
        const response = await promiseFive
    }
    catch(error){
        console.log(error);
        
    }
}

promiseFiveCheck()
console.log("<-------------------- Promise 6 ----------------------->");
async function fetchdata(){
    try{
        const response = await fetch("https://api.github.com/user/hiteshchoudhar");
        
        if(!response.ok){
            throw new Error("Not Work!!!@@@@@@@@@@@@@@@@@@@@@@@@@@@@@!")
        }

        const data = await response.json()
    }
    catch(error){
        throw error
    }
}

async function getdata(){
    try{
        const value = await fetchdata();
    }
    catch(error){
        console.log(error.message);
        
    }
}

getdata()