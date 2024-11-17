//Arrays & Methods

// let arr = [1,2, 3, 4, 5];
// console.log(arr);

// let arr = [1,2, "Saurabh", true, null, 45.23, undefined];
// console.log("Arrays values: ",arr);

// let arr = new Array('Saurabh', 100, true);
// arr.push('Shinde');
// arr.pop();

// arr.shift();
// arr.unshift('Shubham');

// arr.push(20);
// arr.push(30);
// arr.push(40);

// console.log(arr.slice(2, 4));
// arr.splice(1, 2, 'Rushikesh');
// arr.splice(1, 0, 'Rushikesh');
// console.log(arr);

// console.log(typeof(arr));

// let arr = [10, 20, 32, 43, 51, 67, 79, 85];

// let evenArray = arr.filter((number) => {
//     if(number%2 === 0) {
//         return true;
//     }else{
//         return false;
//     }
// });

// var max = arr.filter((number) => {
//     if(max > number) {
//         return true;
//     }else {
//         max = number;
//         return false;
//     }
// })

// console.log(max);

// arr.map((number, index) => {
//     console.log('Number: ',number, " ",'Index: ', index);
// })

// let arr = [12, 'Saurabh', 23.12, true, 10, null, undefined];

// let ans = arr.filter((value) => {
//     if(typeof(value) == 'string') {
//         return true;
//     }else{
//         return false;
//     }
// });

// console.log(ans);

// let arr = [10, 20, 30, 40];
// let ans = arr.reduce((acc, curr) => {
//     return acc + curr;
// }, 0);

// console.log(ans);

// let arr = [12, 3, 24, 20, 40, 34, 100];
// arr.sort();
// arr.sort((a, b) => a - b); //ascending sort
// arr.sort((a, b) => b - a); //descending sort
// console.log(arr);

let arr = [12, 45, 3, 298, 456, 23, 45];
// console.log(arr.indexOf(3));
// let length = arr.length;
// console.log(length);

//traditional loop
// for(let i = 0; i < length; i++) {
//     console.log(arr[i]);
// }

//for each loop
// arr.forEach((value, index) => {
//     console.log('Value: ', value, 'Index: ', index);
// })

//for of loop
// for(let value of arr) {
//     console.log(value);
// }

// let fullName = 'Saurabh Shinde';
// for(let val of fullName) {
//     console.log(val);
// }

let getSum = (arr) => {
    let sum = 0;
    arr.forEach((value) => {
        sum += value;
    })
    return sum;
}

let totalSum = getSum(arr);
console.log(totalSum);
