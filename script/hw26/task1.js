'use strict'

function getFactorial (n) {
    if (n === 1) {
        return n;
    } else {
        return n + getFactorial(n - 1);
    }
}

function pow (num, degree) {
    if (degree === 1) {
        return num;
    } else {
        return num * pow(num, degree - 1);
    }
}

function sum (a, b) {
    if (b === 0) return a;
    a++;
    b--;
    return sum(a, b);
}


console.log(getFactorial(4));
console.log(pow(3, 3));
console.log(sum(45, 3));