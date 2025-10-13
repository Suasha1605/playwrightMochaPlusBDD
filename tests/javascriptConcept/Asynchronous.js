// Is JavaScript Asynchronous? Prove with an example.

console.log(1);
console.log(2);
console.log(3);
console.log(4);

setTimeout(()=>{
console.log(5)
},2000);

console.log(6);

