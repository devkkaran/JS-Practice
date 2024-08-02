function setUsername(userName){
    // complex DB Calls
     this.userName = userName;
    console.log("Called");
}  

function createUser(userName, email, password){
    setUsername.call(this, userName);
    
    // execyte karine gayab that jaay che pn referebce hold nathi karta te karva .call()
    
    // this is global object
    this.email = email;
    this.password = password;

}

const chai = new createUser("Devkaran", "devkaran@gmail.com", "123");

console.log(chai);