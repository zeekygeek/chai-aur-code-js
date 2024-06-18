let index = 64

while (index <= 10) {
    // console.log(`hello ${index}`)
    index++
}

do {
    // console.log(`pranam ${index}`)
    index ++
} while (index <= 10);


//===================================================

for (let p = 0; p < 10; p++) {
    // console.log(`this turn of p is ${p}`)
}

//===================================================

const array = ['car','bike','boat','plane']

for (let q = 0; q < array.length; q++) {
    console.log(array[q]);
}

console.log(array.length)


//==========================================

myArray1 = ['h','he','li','be','b','c','n','o']
myArray2 = ['first','second','third','fourth','fifth','sixth','seventh','eighth']

for (let i = 0; i < myArray1.length; i++) {
        console.log(`The ${myArray2[i]} element is ${myArray1[i]}`)
    }
