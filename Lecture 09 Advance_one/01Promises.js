//NOTE :-

// .then <=> resolve

// const promiseOne = new Promise(function(resolve, reject) {
//     //Do an AsyncTask
//     setTimeout(function(){
//         console.log('Async task is completed')
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function() {
//     console.log('Promise Consumed')
// })

//=================================

// new Promise((resolve, reject) => {
//     setTimeout(function() {
//         // console.log('Async Task 2'),
//         resolve()
//     },1000)
// }).then(function(){
//     // console.log('Async 2 resolved')
// })

//===========================

// const promiseThree = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         resolve({username: "chai", email: "abc@google.com"})
//         reject('An error occurred')
//     }, 10000);
// }).then((user) => {
//     console.log(user)
// })

//===========================

// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "hitesh", password: "123" });
//     } else {
//       reject("Error something went wrong");
//     }
//   }, 2000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("The promise is either resolved or rejected");
//   });

// //============================================

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "javascript", password: "123" });
//     } else {
//       reject("Error: JS went wrong");
//     }
//   }, 1000);
// });

// // async function consumePromiseFive(){
// //     const response = await promiseFive
// //     console.log(response)
// // }

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error)
//   }
// }

// consumePromiseFive();




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

 async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log('E:', error)
    }
}
getAllUsers()


//Another Method [using .then .catch]

// fetch('https://jsonplaceholder.typicode.com/users')
// .then( (response) => {
//     return response.json()
// } )
// .then( (data) => console.log(data) )
// .catch( (error) => console.log(error) )