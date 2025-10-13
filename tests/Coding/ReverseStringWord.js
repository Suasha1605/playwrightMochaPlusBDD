


function reverseEachWordInString(str) {
    let sent = "";
    let words = str.split(' ');
    words.forEach(word => {
        let rev = "";
        for (let i = word.length - 1; i >= 0; i--) {

            rev = rev + word.charAt(i);
        }
        sent = sent + rev + " ";


    })

    return sent;

};

// const revWords = reverseEachWordInString("I love my daughter");

// console.log("Reverse Each Word In String: ",revWords);




function reverseString(givenStr) {
    let rev = "";
    let array = givenStr.split('');

    for (let i = array.length - 1; i >= 0; i--) {

        rev = rev + array[i];
    }

    return rev;
}

// const reverse = reverseString("Playwright Automation");

// console.log("Reverse String: " + reverse);



function vowelsInString(vowel) {

    let array = vowel.toUpperCase().split('');
    // let count = 0;

    // let vowelFound = [];

    let obj = { count: 0, vowelFound: [] };
    array.forEach(a => {

        if (['A', 'E', 'I', 'O', 'U'].includes(a)) {

            // count++;
            obj.count++;
            // vowelFound.push(a);
            obj.vowelFound.push(a);

        }

    })

    return obj;

}

// console.log(vowelsInString("I loove my daaughtear"));



function eachVowelsCountInString(str) {
    let vowels = ['A', 'E', 'I', 'O', 'U'];
    let vowelCount = { A: 0, E: 0, I: 0, O: 0, U: 0 };
    let totalCount = 0;
    let arr = str.toUpperCase().split('');

    arr.forEach(a => {
        if (vowels.includes(a)) {
            totalCount++;
            vowelCount[a]++;

        }
    });

    return { vowelCount, totalCount };

}

// const result = eachVowelsCountInString("I loove my daaughtear");

// console.log(result.totalCount);
// console.log(result.vowelCount);

function sumOfDigitsInString(str) {
    let sum = 0;
    let num = [];
    let arr = str.toUpperCase().split('');

    for (const char of arr) {

        if (!isNaN(char) && char != ' ') {
            num.push(char);
            sum = sum + Number(char);
        }

    };

    console.log("sum= ", sum);
    console.log("Numbers: ", num);

}

sumOfDigitsInString("W1elco2me t3o pla4ywrig5ht")




