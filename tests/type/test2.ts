
let str: string = "welcome to playwright with Typescript";


let sent = "";

for (let word of str.split(' ')) {
    let rev = "";
    for (let i = 0; i < word.length; i++) {

        rev = rev + word[word.length - 1 - i]
    }

    sent = sent + rev + " ";
}

console.log("Rev word sentence: ", sent)

let pr: string = "welcome to playwright with Typescript";

let vowel: string[] = ['a', 'e', 'i', 'o', 'u'];

let letterCount: { [key: string]: number } = {};

for (let char of pr.split('')) {


    if (vowel.includes(char)) {

        if (!letterCount[char]) {

            letterCount[char] = 1;
        }
        else {
            letterCount[char] = letterCount[char] + 1;

        }
    }
};

console.log(letterCount)