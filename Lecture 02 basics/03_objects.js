const JsUser = {
    name: "abhay",
    "last name" : "jha",
    age: 28,
    email: "abay@google.com",
    isLoggedIn: false,
    lastLoginDays: ['Monday','Tuesday','Friday'],
    // [mySymbol]: symbol
}

console.log(JsUser.lastLoginDays)
console.log(JsUser.age)


// console.log(JsUser["last name"]);

console.log(JsUser.email)
//or
console.log(JsUser["email"])
console.log(typeof JsUser['mySymbol'])