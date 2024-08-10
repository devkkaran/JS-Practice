class User{
    constructor(email, password){
        this.email = email;
        this.password = password;


    }

    // this.email is property
    get email(){
        return this._email.toUpperCase();
    }

    set email(value){  // aap value se add ho jao
        return this._email = value;
    }

 
    // Maximum call stack size exceeded
    // race lage che constructor and getter and setter vachche ke ke hu property set karu.


    get password(){
        // return this._password.toUpperCase()
        return `${this._password}devkaran`
    }

    set password(value){
        this._password = value
        // aa password database ke jya hase tya oroginal value tarike set thase pn jyare te access atle ke get karse tyare tene .toUpperCase() ma malse

        // this._password = value;

    }
}

const hitesh = new User('dev@gmail.com', 'Running ');

console.log(hitesh.password);
console.log(hitesh.email);


