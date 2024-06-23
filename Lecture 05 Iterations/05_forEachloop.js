// forEach loop

//forEach loop requires a CallBack Function

const coding = ['js','ruby','cpp','java','python']

// coding.forEach( function(item) {
//     console.log(item)
// } )

coding.forEach( (item) => {
    // console.log(item)
} )

//Another Method =====
function printMe(item){
    // console.log(item)
}
coding.forEach(printMe)

//======================================
   
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName)
} )



// filter map reduce

const testNum = [1,2,3,4,5,6,7,8,9,10]

// testNum.forEach( (num) => console.log(filter(num > 4)))

printMe = testNum.filter( (num) => (num>1) )
console.log(printMe)