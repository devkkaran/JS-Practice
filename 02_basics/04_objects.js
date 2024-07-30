let myObj = new Object();

myObj.firstName = "Devkaran";
myObj.isLoggedIn = true;
myObj.id = "ab123";

console.log(myObj);

const userName =  {
    firstname: "Devkaran",

    fullname: {
        userDetails:{ firstName: "Vijayraj",
        middleName: "Keshavbhai",
        lastName: "Vaghasiya"
    }
    }

}


console.log("<------------Object Destructor------------->");


const {fullname: {userDetails: {firstName}} , mainName} = userName;
console.log(firstName);

const {firstname: myName} = userName;
console.log(myName);

const {fullname: {userDetails: {middleName }}} = userName;
console.log(middleName); 
console.log(userName.fullname.userDetails.lastName);

console.log("<------------Object Combine------------->");
const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};
const obj3 = {e:5, f:6};

const obj4 = {obj2, obj3};
// console.log(obj4);
const mixObj = Object.assign(obj2, obj3);
console.log(obj2);
console.log(mixObj);


console.log("<------------Spread-Out Method------------->");
// SpreadOut Method 

const mixObj1 = {...obj1, ...obj2, ...userName,...obj3};
console.log(mixObj1);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign({}, target, source);

// console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// Expected output: true



console.log("<------------Object In Array------------->");



//Object In Array
const tinderUser = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// tinderUser[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// [
//     [ '0', { id: 1, email: 'h@gmail.com' } ],
//     [ '1', { id: 1, email: 'h@gmail.com' } ],
//     [ '2', { id: 1, email: 'h@gmail.com' } ]
//   ]

console.log(tinderUser.hasOwnProperty('0'));



const tinderUser1 =  [
    obj1,
    obj2,
    obj3

]

// console.log(tinderUser1);

console.log(Object.keys(tinderUser1));
// console.log(Object.values(tinderUser1));
console.log(Object.entries(tinderUser1));
// console.log(tinderUser1.hasOwnProperty('isLoggedIn'));



