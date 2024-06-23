const testNum = [1,2,3,4,5,6,7,8,9,10]


// Filter
// printNum = testNum.filter( (num) => (num>5) )
// console.log(printNum)


//=========================================


// Map
// printNum = testNum.map( (num) => (num + 10) )
// console.log(printNum)

const newNum = testNum.map( (num) => (num * 10) )
                        .map( (num) => (num - 1) )
                        .filter((num) => (num > 30))
// console.log(newNum)


//=======================================


// Reduce
printNum = testNum.reduce( (acc, currval) => {
    // console.log(`acc : ${acc}, currval : ${currval}`)
    return (acc + currval)}, 0)
// console.log(printNum)
    

//Example of Reduce UseCase

const shoppingCart = [
    {
        itemName: 'js course',
        price: 299      
    },
    {
        itemName: 'c++ course',
        price: 399
    },
    {
        itemName: 'python course',
        price: 499
    }
]


const priceToPay = shoppingCart.reduce( (acc, item) => (acc + item.price),0 )
// console.log(priceToPay);


//same with for loop

 let totalprice = 0;
shoppingCart.forEach(item => {
     totalprice += item.price
});
// console.log(totalprice)







//===================================
//for loop
let sum = 0;
for (let i = 0; i < testNum.length; i++) {
    sum += testNum[i]
}
// console.log(sum)

//for of loop   
for (let sum of testNum) {
    sum = sum + testNum
}
// console.log(sum)