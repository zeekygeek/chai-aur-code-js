// for of

// ["", "", ""]

// [{}, {}, {}]


const arr = [1, 2, 3, 4, 5]

for (const num of arr){
    // console.log(num+1)
}


for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element+1)
}

//---------------------------

const greetings = "Hello World"

for (const greet of greetings){
    // if(greet == " "){
    //     console.log('Empty letter found')
    //     continue;
    // }
    console.log(`Each char is ${greet}`)
}


//---------------------------

