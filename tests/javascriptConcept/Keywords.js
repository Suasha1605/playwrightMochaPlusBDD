// What is the difference between var, const, and let? Explain with an example.

//  Var= {
//   scope: "global & function level",
//   Redeclaration: "true",
//   updation:"true"

// }

function varDemo() {
    var a = 5;

    if (true) {

        var a = 1;

        console.log(a);

        a = 8;
        console.log(a);

    }

    console.log(a);


};

varDemo();

console.log("varDemo() end !!!")


//  let= {
//   scope: "block level",
//   Redeclaration: "false",
//   updation:"true"

// }

function letDemo() {
    let a = 5;

    if (true) {

        let a = 1;

        console.log(a);

        a = 8;
        console.log(a);

    }

    console.log(a);


};

letDemo();

console.log("letDemo() end !!!")


//  const= {
//   scope: "block level",
//   Redeclaration: "false",
//   updation:"false"

// }

function constDemo() {
    const a = 5;

    if (true) {

        const a = 1;

        console.log(a);


    }

    console.log(a);


};

constDemo();

console.log("constDemo() end !!!")


// Diff between '==' and '==='?

console.log(5=='5');
console.log(5==='5');