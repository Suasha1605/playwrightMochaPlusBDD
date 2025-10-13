

function reverseNumber(no) {
    console.log(no);
    const rev = no.toString().split('').reverse().join('');

    console.log(rev);

    if (no.toString() === rev) {

        console.log(no, " is palindrome number")

    }
    else {

        console.log(no, " is not palindrome number")
    }

}

// reverseNumber(1234321);


function palindromeNumber(n) {
    console.log(n);
    let original = n;
    let rev = 0;
    for (n; n > 0; n = Math.floor(n / 10)) {

        rev = rev * 10 + n % 10;


    }

    console.log(rev);

    if (original === rev) {

        console.log(original, " is palindrome number")

    }
    else {

        console.log(original, " is not palindrome number")
    }

}

palindromeNumber(12345321);

