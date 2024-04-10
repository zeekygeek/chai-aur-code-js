const accountId = 16453
let accountEmail = "xyz@google.com"
var accountPassword = "12345"
accountCity = "Banglore"
let accountState;

// accountId = 2 // not allowed


accountEmail = "abc@abc.com"
accountPassword = "265121"
accountCity = "Hyderabad"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])