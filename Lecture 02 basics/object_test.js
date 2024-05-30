const testObj = new Object()

testObj.name = 'ayush'
testObj.age = 24
testObj.nationality = 'Indian'

const name = 'abhijeet'
// console.log(testObj.name.toUpperCase())


const tryObj = {
    n5ame: 'pratham',
    a5ge: 54,
    n5ationality: 'American'
}

// console.log({...testObj, ...tryObj})

// console.log(Object.assign({}, tryObj, testObj))


console.log(Object.keys(tryObj))