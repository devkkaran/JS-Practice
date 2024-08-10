// pela Class nohta tyare aa rite function ma set thata
function User(email, password){
    this._email = email;  // Use _email for internal storage
    this._password = password; // Use _password for internal storage

    // Object.defineProperty(this, 'email', {
    //     get: function(){
    //         return this._email.toUpperCase();
    //     },

    //     set: function(value){
    //         this._email = value;
    //     }
    // })


    Object.defineProperty(this,'email', {
        get: function(){
            return this._email.toUpperCase() // Access internal _email
        },

        set: function(value){
            this._email = value; // Set internal _email
        }
    })


    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()  // Access internal _password

        },
        set: function(value){
            this._password = value;  // Set internal _password
        }
    })
}

const coffee = new User('chai@gmail.com', 'Coffee & chai');
console.log(coffee.email); // Outputs: CHAI@GMAIL.COM
console.log(coffee.password);



