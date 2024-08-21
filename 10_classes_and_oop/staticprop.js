console.log("<-------------------- 45 Class constructor and static  ----------------------->");

class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static creatId(){
        return '123';
    }
}

const keshav = new User('Keshavbhai');

console.log(keshav.logMe());  // because we already use console.log in funcion and outside we console to print that's why it gives "Undefined"

// Use Static
// console.log(keshavz.creatId());

keshav.logMe()


class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email;

    }
}

const iphone = new Teacher('Iphone', "i@gmail.com")

// iphone.logMe();  
// console.log(iphone.creatId());  // can't Use
console.log(Teacher.creatId()); // Use
console.log(User.creatId());

class MyClass {
    constructor(name) {
      this.name = name; // Instance property
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  
    // Static method
    static describeInstance(instance) {
      console.log(`This instance's name is: ${instance.name}`);
    }
  }
  
  // Creating instances of the class
  const obj1 = new MyClass("Alice");
  const obj2 = new MyClass("Bob");
  
  // Accessing instance properties through a static method
  MyClass.describeInstance(obj1); // Output: This instance's name is: Alice
  MyClass.describeInstance(obj2); // Output: This instance's name is: Bob
  
  // Using instance methods
  obj1.greet(); // Output: Hello, my name is Alice.
  obj2.greet(); // Output: Hello, my name is Bob.
  