//Class & Default parameters

// function getAge() {
//     return 190;
// }

// function utility(name = "Saurabh", age = getAge()) {
//     console.log(name, " ", age);
// }

// utility();

// function solve(value = "Saurabh") {
//     console.log("Hello jii -> ", value);
// }

// solve(undefined);

// function Name(fName = "Saurabh", lName = "Shinde") {
//     console.log("My Name is ", fName, "", lName);
// }

// Name("Shubham", "Shinde");

class Human{
    age = 25; //public
    #wt = 65; //private
    ht = 180;

    constructor(newAge, newWt, newHt) {
        this.age = newAge;
        this.#wt = newWt;
        this.ht = newHt;
    }

    //behavior
    #walking() {
        console.log("I am walking", this.#wt);
    }

    running() {
        console.log("I'm running");
    }

    greet() {
        console.log("Hello");
    }

    set modifyWeight(val) {
        this.#wt = val;
    }

    get fetchWeight() {
        return this.#wt;
    }
}

let obj = new Human(21, 70, 160);
console.log(obj.fetchWeight);
// console.log()
// obj.running();