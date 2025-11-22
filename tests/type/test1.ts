console.log("Welcome to TypeScript testing!");


let age: number = 25;

let empName: string = "John Doe";

console.log(`Employee Name: ${empName}, Age: ${age}`);

let isServicingNoticePeriod: boolean = true;

if (isServicingNoticePeriod) {
    console.log(`${empName} is currently serving their notice period.`);
}


let data: number[] = [10, 20, 30, 40, 50];

console.log("Data Array:", data);

let emp: { id: number, name: string, age: number } = { id: 101, name: "John Doe", age: 25 };

console.log("Employee Object:", emp);

function add(x: number, y: number): number {


    return x + y;
}

let result: number = add(3, 4);

console.log("Addition Result:", result);


let flag: boolean = true;

console.log(typeof (flag));

console.log('flag:', flag);


let num1: number | string | null;

num1 = 100;
console.log(typeof (num1));
num1 = 'welcome'
console.log(typeof (num1));
num1 = null;
console.log(typeof (num1));

let r: number = 10;
let p: number = r--;

console.log('post: ', p);
console.log('post: ', r);

let d: number = 10;
let q: number = --d;
console.log('pre: ', q);
console.log('pre: ', d);