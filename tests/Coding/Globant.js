const { syncBuiltinESMExports } = require("module");



const str = 'GeeksForGeek';
const Output = 'eGkeFsroeGkes';

const arr = str.split('');
let result = '';
let temp = '';


for (let i = 1; i < arr.length; i = i + 2) {

    
        result = result + arr[i] + arr[i - 1];
       


f
}
if(arr.length%2!==0){

    result= result+arr[arr.length-1];
console.log("Result:", result);
}
else{

    console.log("Result:", result);
}







// result.join('');




