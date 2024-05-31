// const user = {
//     username : 'abhay',
//     price : 199,
//     welcomeMessage : function (){
//         console.log(`Welcome ${this.username}`)
//         console.log(this)
//     }
// }
// user.welcomeMessage()

// console.log(this)

// --------------------------------------------------------------------

// function chai(){
//     let username = "abhi"
//     console.log(this.username)
// }
// chai()

    //     OR

// const chai = function(){
//     let username = "abhi"
//     console.log(this.username)
// }
// chai()


// ---------------- ARROW FUNCTION ------------------

// const chai = () => {
//     let username = "abhi"
//     console.log(this.username)
// }
// chai()

// function testFunction (num1,num2) {
//     ({
//         username : "abhi",
//         age : 43
//     })
// }
// console.log(testFunction(4,5))


// ------------------------------------


// const addTwo = (num1,num2) => {
//     return (num1 + num2)
// }

//   OR

const addTwo = (num1,num2) => (num1 + num2)

console.log(addTwo(4,5))