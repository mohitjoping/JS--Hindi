const user ={
    username: 'hitesh',
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this);
    }

}

user.welcomeMessage()   
user.username = 'hitesh choudhary'
user.welcomeMessage()

console.log(this)


// function chai(){
//     let username = 'hitesh' 
//     console.log(this.username)//in function this is not work but in object it works 
// }
// chai()


// const chai = () => {
//     let username = 'hitesh' 
//     console.log(this.username)//in arrow function this is work but in object it works 
// }   

// chai()

// used /explain (rerun without)
// In arrow functions, the this keyword behaves differently compared to regular functions. In regular functions, the value of this is determined by how the function is called. However, in arrow functions, the value of this is lexically scoped, meaning it is determined by the surrounding context where the arrow function is defined.

// This behavior is particularly useful when working with callbacks or nested functions, as it allows you to access the this value from the outer scope without having to use workarounds like storing it in a separate variable.

// In your code snippet, you can see an example of how this behaves differently in an arrow function compared to a regular function. The commented out code block defines a regular function chai() and attempts to access this.username. However, since chai() is a regular function, the value of this is determined by how it is called, and in this case, it would be undefined because username is not defined in the global scope.

// On the other hand, the arrow function addTwo in your code snippet demonstrates the lexically scoped behavior of this. Since arrow functions do not have their own this value, they inherit the this value from the surrounding scope. In this case, the arrow function addTwo is defined within the global scope, so it can access variables defined in the global scope, such as num1 and num2.

// It's important to note that the lexically scoped this behavior of arrow functions can be advantageous in certain scenarios, but it may not always be suitable for every situation. It's important to understand the differences between arrow functions and regular functions and choose the appropriate one based on your specific use case.

// const addTwo = (num1, num2) => {    
//     return num1 + num2      
// }

// console.log(addTwo(2,3))    

// const addTwo = (num1, num2) => num1 + num2
// implicit return 

const addTwo = (num1, num2) => ({sum: num1 + num2})
// in implicit return we have to use () to return object

// +++++++++++++++++++++++++++++++++++

const myArray = [1,2,3,4,5,6,7,8,9,10]

myArray.forEach((num) => (console.log(num)))

myArray.forEach((num) => {
    console.log(num)
}   )