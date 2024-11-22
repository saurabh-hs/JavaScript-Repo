//Error Handling

//syntax error
//console.log(1;

//Runtime error
// console.log(x);

// let x = 12;

try{
    console.log('try block starts here');
    console.log(x);
    console.log('try block ends here');
}catch(err) {
    console.log('I am inside catch block');
    console.log('Your error is here: ', err);
}
finally{
    console.log('finally block!!');
}

//Custom error
// try{
//     console.log(x);
// }catch(err) {
//     throw new Error("Variable is not declared!!");
// }

// let errorCode = 101;

// if(errorCode == 101) {
//     throw new Error("Invalid Json");
// }
