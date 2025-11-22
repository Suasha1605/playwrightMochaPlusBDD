var str = "welcome to playwright with Typescript";
var sent = "";
for (var _i = 0, _a = str.split(' '); _i < _a.length; _i++) {
    var word = _a[_i];
    var rev = "";
    for (var i = 0; i < word.length; i++) {
        rev = rev + word[word.length - 1 - i];
    }
    sent = sent + rev + " ";
}
console.log("Rev word sentence: ", sent);
var pr = "welcome to playwright with Typescript";
var vowel = ['a', 'e', 'i', 'o', 'u'];
var letterCount = {};
for (var _b = 0, _c = pr.split(''); _b < _c.length; _b++) {
    var char = _c[_b];
    if (vowel.includes(char)) {
        if (!letterCount[char]) {
            letterCount[char] = 1;
        }
        else {
            letterCount[char] = letterCount[char] + 1;
        }
    }
}
;
console.log(letterCount);
