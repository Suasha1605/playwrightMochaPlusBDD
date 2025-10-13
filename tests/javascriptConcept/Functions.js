// Can a JavaScript object hold a function as a property? Explain with an example.-Yes

const { resolve } = require("path");

const emp = {

    id: 18254,
    name: "Tushar Shinde",
    dept: "HR",
    empInfo: function () {

        console.log(" Id: " + this.id + " Name: " + this.name + " Dept: " + this.dept)
    }



};

emp.empInfo();


// What are anonymous functions in JavaScript? Define their syntax and implementation.
// Function without name

// anonymous function
const add = function (a, b) {

    return a + b;
}

const sum = add(5, 4);

console.log(sum);


function sub(c, d) {

    return c - d;
}

const subtract = sub(12, 8);

console.log(subtract);


// callback Function
/* A callback function in JavaScript is a function passed as an argument to another function,
  and it's executed after the parent function completes its task. This pattern is essential 
 for handling asynchronous operations like API calls, timers, or event listeners.*/

function parentFunction(callback) {

    setTimeout(() => {

        console.log('parentFunction is called');

        const data = "return parentFunction data";
        callback(data);
    }, 2000);

}

function callbackFunction1(data) {

    console.log("callbackFunction 1  is called");

    console.log("parentFunction in callback 1: " + data)

}
function callbackFunction2(data) {

    console.log("callbackFunction 2  is called");

    console.log("parentFunction in callback 2: " + data)

}

parentFunction(callbackFunction1);

parentFunction(callbackFunction2);


//   What are promises in JavaScript? Explain the difference between callback functions and promises with an example.

function promiseFunction() {


    return new Promise((resolve) => {
        setTimeout(() => {

            console.log('parentFunction is called');

            const data = "return parentFunction data";

            resolve(data);

        }, 2000);

    })


};

promiseFunction().then(function (data){

    console.log(data);
});




