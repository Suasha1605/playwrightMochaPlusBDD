let str = 'a@b,c$d&'
//   Output: d1c2b3a4

let arr = str.split('');

let letters = arr.filter(ch => /[a-zA-Z]/.test(ch))
let chart = letters.toReversed()
let index = 0;
let rev = '';

for (let i = 0; i < arr.length; i++) {

    if (/[a-zA-Z]/.test(arr[i])) {

        rev = rev + chart[index++]
    }
    else {

        rev = rev + arr[i]
    }


}

console.log("Output: ", rev)
