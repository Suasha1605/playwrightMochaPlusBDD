const { syncBuiltinESMExports } = require("module");

let str = "Wel1@co2me t3o Play#w4right Java!scr4ipt";
console.log(str);
let newstr = str.replaceAll(/[^\/a-zA-Z0-9 ]/g, '').toLowerCase().split('');

let vowel = ['a', 'e', 'i', 'o', 'u']
let count = 0;
let v = [];

let object = {};

for (let a of newstr) {



    if (vowel.includes(a)) {

        object[a] = (object[a] || 0) + 1;
        count++;

    }


}
console.log("Vowels count:", count);
console.log("Vowels:", object);


let crr = "We1come to Playwright Javascript";

let drr = crr.split(' ');

let sent = "";
for (word of drr) {
    let rev = "";
    rev = word.split('').reverse().join('');

    sent = sent + rev + " ";

}

console.log("ReverseWords:", sent);