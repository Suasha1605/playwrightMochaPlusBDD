// Where are the push, pop, slice, shift, and unshift methods used when accessing array elements?

// Push : add element at the end

const subject =['English', 'Marathi', 'Maths', 'Chemistry', 'Biology'];

console.log(subject);

subject.push('Physics');

console.log("After push: "+subject);

// pop : Remove last element
subject.pop();

console.log("After pop: "+subject);

// unshift : add element at the biginnng

subject.unshift('Electronic');

console.log("After unshift: "+subject);

// shift : Removes the first element from an array

subject.shift();
console.log("After shift: "+subject);

// slice : Returns new copy of a section of an array from start and end index(exclusive)

const subCopy= subject.slice(1,4);
console.log("After slice: "+subCopy);

// splice : Removes specific elements from an array and return remaining element
// Adds, removes, or replaces elements in the array.
subject.splice(1,2,'Datascience','Social science') //(first arg: start index to delete , second arg: delete count from first index)
console.log("After splice: "+subject);

const id =subject.indexOf("Biology");

console.log(id);

subject.forEach((sub,index)=>{

    console.log(`${index}, ${sub}`)
});


const array=[{name:'Sunil',score:85},
    {name:'Asha',score:45},
    {name:'Aarvi',score:95},
    {name:'Aarvik',score:88},
    {name:'SweetFamily',score:80}];


console.log(array);   
// Filter:
const highestScope = array.filter((a)=>
    a.score>=90
);

console.log('highestScope', highestScope);

// Map: 
const upperCase = array.map(m=>

    m.name.toUpperCase()

);

console.log(upperCase);

// Reduce arithmatic operation

const totalScore =array.reduce(function(sum,mark){

    sum=sum+mark.score;

    return sum;

},0);

console.log('Average Score: ',totalScore/array.length);