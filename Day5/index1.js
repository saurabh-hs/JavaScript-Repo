//Functions
// function greet() {
//     console.log("Good morning");
// }

// greet();

// function greet(name) {
//     return `Hello, ${name}!`;
// }

// console.log(greet("Saurabh"));

// function sum() {
//     let a = 10;
//     let b = 15;
//     let ans = a + b;
//     console.log(ans);
// }

// sum();

// function multiply() {
//     let a = 10;
//     let b = 2;
//     let ans = a * b;
//     console.log(ans);
// }

// multiply();

// function divide(num1, num2) {
//     return num1/num2;
// }

// let ans = divide(10, 2);
// console.log(ans);

// function getAvg(a, b) {
//     return (a + b)/2;
// }

// let ans = getAvg(10, 15);
// console.log(ans);

//Function Expression
// const getSum = function(a, b) {
//     return (a + b);
// }

// console.log(getSum(10.3, 20));

// const getArea = function(radius) {
//     return 3.14 * (radius**2);
// }

// let ans = getArea(12);
// console.log(ans);

//Arrow functions
// let getName = (firstName, lastName) => {
//     return firstName + " " + lastName;
// }

// let fullName = getName("Saurabh", "Shinde");
// console.log(fullName);

// let add = (a, b, c) => {
//     return (a + b + c);
// }

// let ans = add(12, 34.5, 57689.34);
// console.log(ans);

// let squareNumber = (a,b) => {
//     return a**b;
// }

// let ans = squareNumber(5, 2);
// console.log(ans);

// const greet = (name) => {
//     return `Good morning, ${name}!!`;
// }

// console.log(greet("Saurabh"));

const getDiameter = (radius) => {
    return 2 * radius;
}

let diameter = getDiameter(24);
console.log("Diameter of circle: "+diameter);
