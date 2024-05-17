// const newUser = new Object();
const newUser = {}

newUser.id = "1234"
newUser.name= "ajit"
newUser.age= 32

// console.log(newUser)

const testUser = {
    gender : "male",
    age : 55,
    name : {
        firstname : "ajit",
        lastname : "kumar",
        languageKnown : {
            english : true,
            hindi : false,
            marathi : true,    
        }
    }
}
// console.log(testUser.name.firstname)
// console.log(testUser.name.languageKnown.marathi)

// --------------------------------------------------------------

const Obj1 = {
    1 : 'a',
    2 : 'b',
    3 : 'c'
}

const Obj2 = {
    9 : 'z',
    8 : 'y',
    7 : 'x'
}

console.log(Obj1)
console.log(Obj2)

console.log({Obj1, Obj2})

// const Obj3 = Object.assign({}, Obj1, Obj2)
// console.log(Obj3)

console.log({...Obj1, ...Obj2})



//Intresting Methods

console.log(Object.keys(Obj2))
console.log(Object.values(Obj2))
console.log(Object.entries(Obj2))

console.log(Obj2.hasOwnProperty(8))

