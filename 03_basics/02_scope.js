// let a = 100
// const b = 20
// var c = 30
 
// if(true){
//     let a = 10
//     const b = 20
//     console.log('inner:', a)
// }

// console.log(a);
// console.log(b);
// console.log(c);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function one(){
    const username = 'mohit'

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)

    two()
}
one()

function addone(num){
    return num+1
}

addone(5) ///you can access it above of function defination


const addTwo = function(num){ ///experession
    return num+2
}
addTwo(5)  ///this get error when you access it above of function defination because it is expression and it is not hoisted and it is not accessable above of function defination and hoisted is not work in expression .


// // 
// In JavaScript, hoisting is a mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can access variables and functions before they are actually declared in your code.

// However, it's important to note that hoisting only applies to variable and function declarations, not to expressions. Expressions, such as function expressions or variable assignments, are not hoisted.

// In your code example, addTwo is defined using a function expression, which means it is assigned to a variable (const addTwo) and not declared using the function keyword. Since function expressions are not hoisted, you cannot access addTwo before its declaration in your code.

// Here's an example to illustrate this:

// In the example above, addOne is a function declaration and is hoisted to the top of the scope, so you can call it before its actual declaration. However, addTwo is a function expression and is not hoisted, so trying to call it before its declaration will result in an error.

// To avoid such errors, it's generally recommended to declare your variables and functions before using them in your code, regardless of hoisting.
