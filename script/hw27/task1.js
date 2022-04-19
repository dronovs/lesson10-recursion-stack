'use strict'

function getPalindrome (num) {
    let steps = 0;

    function getReverseNumber (a) {
        return parseInt(a.toString().split('').reverse().join(''));
    }

    function sumUntilPalindrome (num) {

        if (num === getReverseNumber(num)) {
            return {
                num,
                steps: steps,
            };
        } else {
            steps++;
            num += getReverseNumber(num);
            return sumUntilPalindrome(num);
        }

    }
    
    return sumUntilPalindrome(num);
}

const result = getPalindrome(96);
console.log(result);

