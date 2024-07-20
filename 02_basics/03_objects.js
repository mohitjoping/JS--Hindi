// singleton  drive by constructor
// Object.create

// object literals



const JsUser = {
    name: 'mohit',
    age: 22,
    email: 'hellomohit21@gmail.com',
    location: 'hisar',
    isLoggedIn: false,
    lastLoginDays: ['Monday','saturday']
}

// console.log(JsUser.email);//this is not the good practice to acces objects elements.
// console.log(JsUser["email"]);//this is good

const myPass = Symbol("key1") // if interviewer say define a symbol variable and use it in obj then using [] we do that thing

// Object.freeze(JsUser)
JsUser.greeting = function(){
    console.log("hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());