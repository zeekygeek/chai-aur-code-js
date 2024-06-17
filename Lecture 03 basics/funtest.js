// const tryObj = new Object()
// tryObj.name = "asha"
// tryObj.age = 33

// function resultName (name2){  
//     return(name2.name)
// }

// finalname = resultName(tryObj)

// console.log(finalname)

// let month = 'Jan'
// switch(month){
//     case 'Jan' :
//         console.log('this month is January')
//     break;
//     case 'Feb' :
//         console.log('this month is February')
//     break;
//     case 'Mar' :
//         console.log('this month is March')
//     break;
//     default :
//     console.log('no month provided')
// }




// NUMBER SQUARE TABLE 
for (let i = 0; i <= 100; i++) {
    for (let j = 0; j <= 100; j++) {
        if(i != j){
            continue
        }
        console.log(`${i} * ${j} = ${i*j}`)
        // console.log(`${i} ^ 2 = ${i*j}`)
    }
}