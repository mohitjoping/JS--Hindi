// function addTwoNumbers(number1, number2){
    
//     console.log(number1+number2)
//     let result = number1+number2
//     return result

// }
// addTwoNumbers(3, 5)

// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage()); 

function calculateCartPrice (val1, val2, ...num1){ ///rest operator
    return num1
}
console.log(calculateCartPrice(200,400,500))

const user ={
    userName: "mohit",
    prices: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    userName: "mohit", //direct object pass in function
    prices: 199
})

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log( returnSecondValue(myNewArray))
console.log( returnSecondValue([200,300,400,500]))

 