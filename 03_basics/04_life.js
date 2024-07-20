// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named iffe
    console.log('DB CONNECTED')
})()

// (function)(function execution)
// due to pollution of global scope we use IIFE


// In JavaScript, IIFE stands for Immediately Invoked Function Expression. It is a design pattern that allows you to create a function and immediately invoke it.

// There are a few reasons why you might want to use an IIFE in JavaScript:

// Encapsulation: By wrapping your code in an IIFE, you create a new scope for your variables and functions. This helps prevent naming conflicts with other parts of your code or external libraries. It also allows you to keep your code modular and organized.

// Privacy: Variables and functions defined inside an IIFE are not accessible from the outside. This provides a level of privacy and prevents them from polluting the global scope. It's especially useful when you want to create private variables or helper functions that are only used within a specific context.

// Initialization: You can use an IIFE to initialize your code or set up any necessary configurations before executing the rest of your program. This can be useful for setting up event listeners, configuring libraries, or performing any other initialization tasks.

// Here's an example of how an IIFE can be used:

// In this example, the function is defined and immediately invoked using the () at the end. The code inside the IIFE has its own scope, and any variables or functions defined inside are not accessible from the outside.

// I hope this helps! Let me know if you have any further questions.

// +++++++++++++++++++++++++++++++++++++++

(() => {
    console.log('DB CONNECTED')
})();

// it is good practice to use ; at the end of IIFE
