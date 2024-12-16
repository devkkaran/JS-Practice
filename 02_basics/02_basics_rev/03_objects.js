const sym = Symbol("Deva")

const JsUser = {
    name: "Dev",
    rollNum: 12,
    ["my email"]: "devkaran@gmail.com",
    mySUm: true,
    things: ["jsmanual", "reactmanual"],
    [sym]: "myKey1"

}

console.log(JsUser.name);
console.log(JsUser.rollNum);
console.log(JsUser["my email"]);
console.log(JsUser.mySUm);
console.log(JsUser.things);
console.log(JsUser[sym]);


JsUser.greeting2 = function(){
    return `JUST NAME OF FUNCTION 2`
    
}
JsUser.greeting = function(){
    console.log(`This is Object JsUser's function ${this.greeting2()}`);
    
}


JsUser.greeting();


const tinderUsr = [
    {
        id: 12,
        email: 'dev12@gmail.com'
    },
    {
        id: 13,
        email: 'dev13@gmail.com'
    },
    {
        id: 14,
        email: 'dev14@gmail.com'
    }
]


console.log(tinderUsr[0]);
console.log(tinderUsr[1]);
console.log(tinderUsr[2]);


const userName = {
    firstName: "Devkaran",

    userDetails: {
        lastName: "vaghasiya",
        middleName: "K",
        fatherName: "keshavbhai"
    }
}

const {firstName} = userName
console.log(firstName);

const {userDetails: {fatherName}} = userName
console.log(fatherName);


const {userDetails: myName} = userName
console.log(myName);


const newArray = ['Devkaran', 'vijayraj', 'keshavbhai']

const [familyname, motherName = "Geetaben", ...rest ] = newArray
console.log(...rest);
console.log(familyname);
console.log(motherName);

const tinderUser = [
    {
        id: 11,
        email: "dev11@gmail.com"
    },
    {
        id: 12,
        email: "dev12@gmail.com"
    },
    {
        id: 13,
        email: "dev13@gmail.com"
    }
]

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('0'));



