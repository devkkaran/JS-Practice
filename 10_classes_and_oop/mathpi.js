console.log("<-------------------- 47. Advance in JS  ----------------------->");

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor);
console.log(Math.PI)
Math.PI = 5;
console.log(Math.PI)


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    
    orderChai: function(){
        // code phat gaya
    }
}

console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, 'isAvailable'));

console.log("<-------------------- Define Property In JS ----------------------->");
Object.defineProperty(chai, 'isAvailable', {
    writable: false,
    enumerable: false  // iterate hona
})

console.log(Object.getOwnPropertyDescriptor(chai, 'isAvailable'));

for (let [key, value] of Object.entries(chai)) {
    console.log(typeof value)
    if(typeof value !== 'function'){
        
        console.log(`${key} : ${value}`);
        
    }
}
console.log(chai.orderChai);