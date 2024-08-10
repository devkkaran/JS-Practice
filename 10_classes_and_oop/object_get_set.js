const User = {
    _email: 'geeta@gmail.com', 
    _password: "xyz",

    //  # use instead of # for make property private

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value
    }

}

// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.

const tea = Object.create(User);
console.log(tea._email);
console.log(tea.email);