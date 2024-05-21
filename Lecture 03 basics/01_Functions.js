// function sayHello () {
//     console.log('hello world')
// }
// sayHello()


// --------------------------------------------------------------------


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(5, 6)



// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// const result = addTwoNumbers(5, null)


function loginUserMessage(username){
    if (!username){
        console.log("Please enter a username")
        return;
    }
    return `${username} just logged in!`
}

console.log(loginUserMessage("ajit"));

// Setting Default Value ----------------------------------
function loginUserMessage(username = "sam"){
    if (!username){
        console.log("Please enter a username")
        return;
    }
    return `${username} just logged in!`
}

console.log(loginUserMessage());