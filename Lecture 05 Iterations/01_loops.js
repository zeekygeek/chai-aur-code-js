// for loop ::

for (let i = 0; i < 10; i++) {
    // console.log(i);
}

// -----------------------------------------------------------------------



// Nested Loop
for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop : ${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value : ${j} and inner loop ${i}`); 
        // console.log(i , '*' , j , '=' , i*j)
        // console.log(`${i} * ${j} = ${i*j}`)   
    }
}


//------------------------------------------------------------------------

// BAISC SYNTAX OF loop

let myArray = ['hindi', 'english', 'maths', 'physics']
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

//------------------------------------------------------------------------


// BREAK & CONTINUE

// for (let i = 1; i <= 10; i++) {
//     console.log("")
//     if (i === 5){
//         console.log("Breaking the loop");
//         break;
//     }   
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);   
//     }  
// }

//------------------------------------------------------------------------- 