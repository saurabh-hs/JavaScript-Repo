//Object cloning & garbage collector

let src = {
    age: 25,
    wt: 65,
    ht: 168
};

//cloning using spread operator
// let dest = {...src};
// let dest = src;

// src.age = 29;

// console.log('Src: ', src);
// console.log('Dest: ', dest);

//cloning using iteration
// let desc = {};
// for(let key in src) {
//     let newKey = key;
//     let value = src[key];
//     //insert new key & value into desc
//     desc[newKey] = value;
// }

// src.age = 30;

// console.log(src);
// console.log(desc);

//cloning using assign method
let src2 = {
    value: 101,
    name: "Saurabh Shinde"
}

let desc = Object.assign({}, src, src2);

src.age = 28;

console.log('Src: ', src);
console.log('Desc', desc);
