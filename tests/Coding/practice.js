const { syncBuiltinESMExports } = require("module");

//  Employee
let emp = {

    name: "Sunil Pawar",
    age: 30,
    dept: "QA",
    office: "Pune",
    empDetails: function () {

        console.log("name: ", this.name, "age: ", this.age, "dept", this.dept, "office: ", this.office)
    }

};


// emp.empDetails();


let arr = ["Tiger", "Lion", "Wolf", "Deer", "Rheno", "Elephant"];

// console.log(arr.reverse());


console.log(arr.slice(1, 3));
console.log(arr.splice(1, 3, "Rat"));
console.log(arr);


let str = "Welcome to Playwright";
console.log(str.split(' ').reverse().join(' '));
console.log(str.split(' ').toReversed().join(' '));
let rev = "";

let words = str.split(' ');

words.forEach(word => {

    let temp = word.split('').reverse().join('');
    rev = rev + temp + " ";

});

console.log("Reverse: ", rev);






