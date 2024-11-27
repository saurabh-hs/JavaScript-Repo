// let firstPromise = new Promise((resolve, reject) => {
//         console.log("My name is Saurabh Shinde");
//         reject(100);
// });


// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(function sayMyName() {
//         console.log("Saurabh Shinde");
//     }, 1000);

//     reject(100);
// })

// let age = 19;

// const myPromise = new Promise((resolve, reject) => {
//     if(age >= 18) {
//         console.log("You can vote");
//         resolve("Operation completed successfully");
//     }else{
//         console.log("You can not vote");
//         reject("Operation failed");
//     }
// });

// let promise1 = new Promise((resolve, reject) => {
//     let success = true;
//     if(success) {
//         resolve("Promise fulfilled");
//     }else{
//         reject("Promise rejected");
//     }
// });

// promise1.then((message) => {
//     console.log("Then message: "+message);
// }).catch((error) => {
//     console.log("Error: "+error);
// })

//Promise chaining
// const myPromise = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     let success = true;
//     if (success) {
//         resolve("Operation completed successfully");
//     } else {
//         reject("Operation failed");
//     }
// });

// myPromise.then((result) => {
//     console.log(result);
//     return anotherPromise;
// }).then((anotherResult) => {
//     console.log(anotherResult);
// }).catch((error) => {
//     console.error(error);
// });

//Promise.all()

const promise1 = fetch('https://api.example.com/data1');
const promise2 = fetch('https://api.example.com/data2');

Promise.all([promise1, promise2]).then(respone => respone.json())
.then(data => console.log(data))
.catch(error => console.error('Error: ', error));
