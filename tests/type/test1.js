console.log("Welcome to TypeScript testing!");
var age = 25;
var empName = "John Doe";
console.log("Employee Name: ".concat(empName, ", Age: ").concat(age));
var isServicingNoticePeriod = true;
if (isServicingNoticePeriod) {
    console.log("".concat(empName, " is currently serving their notice period."));
}
var data = [10, 20, 30, 40, 50];
console.log("Data Array:", data);
var emp = { id: 101, name: "John Doe", age: 25 };
console.log("Employee Object:", emp);
function add(x, y) {
    return x + y;
}
var result = add(3, 4);
console.log("Addition Result:", result);
var flag = true;
console.log(typeof (flag));
console.log('flag:', flag);
var num1;
num1 = 100;
console.log(typeof (num1));
num1 = 'welcome';
console.log(typeof (num1));
num1 = null;
console.log(typeof (num1));
var r = 10;
var p = r--;
console.log('post: ', p);
console.log('post: ', r);
var d = 10;
var q = --d;
console.log('pre: ', q);
console.log('pre: ', d);
