const user =  {
    username : "abhay",
    loginCount : 8,
    singedIn : true,

    getUserDetails: function() {
        console.log("Got user details from Database")
        console.log(`User is ${this.username}`)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())


//=============================================================================

//Constructor Function = new       
// (new keyword is constructor fn)


//=============================================================================


function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    // return this 
    this.greetings = function() {
        console.log(`Welcome ${this.username}`)
    }
}

User("hitesh", 82, true)

const userOne = new User("hitesh", 12, true)
const userTwo = new User("rajesh", 45, true)

console.log(userOne)
console.log(userTwo)


userOne.greetings()


//changes made 07-08-2024 

// 10:00 pm

//10:30 pm