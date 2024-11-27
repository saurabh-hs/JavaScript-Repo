// async function getData() {
//     setTimeout(function() {
//         console.log("I am inside set timout block");
//     }, 3000);
// }

// let output = getData();


//1. GET request
// async function getData() {
//     let response = await fetch('https://jsonplaceholder.org/users?id=1');
//     // console.log(response);

//     let data = await response.json();
//     console.log(data);
// }

// getData();

//2. Post request
// const postDate = {
//     "id": 201,
//     "firstname": "Saurabh",
//     "lastname": "Shinde",
//     "email": "abc@example.com",
//     "birthDate": "1999-08-31",
// };

// fetch('https://jsonplaceholder.org/posts', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(postDate)
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('Error: ', error));

async function getData() {
    let response = await fetch('https://jsonplaceholder.org/users?id=1');
        // console.log(response);
    
    let data = await response.json();
    console.log(data);
}
    
getData();