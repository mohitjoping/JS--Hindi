// Primitve 

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100 // dynamically typed 
// const score:number = 100//typescript

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id)
console.log(anotherId)
console.log(id === anotherId);

// Reference (Non Primitve)

// Array, Objects, browser Events, functions

// const bigNumber = 39123456789009876541234567890987654323456789234512345678n
console.log(typeof bigNumber);

const heros = ['saktiman', 'naagraj']
let myObj = {
    name: "hers",
    age:22
}

const myFunction = function(){
    console.log("hello");
}
const myFunction2 = ()=>{
    console.log("hello");
}

// =====================================================
// stack (primitive) => copy , heap (Non primitive))=> reference

let myYoutubename = "mohit"
let anotherName = myYoutubename
anotherName = "hello"
console.log(anotherName );
console.log(anotherName);

let user = {
    email: "user@gmail.com",
    upi: "chaiaurcode"
}