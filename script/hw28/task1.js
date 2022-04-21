'use strict'

function addSum (num) {
    return function (num2) {
        return num += num2;
    }
}

let sum = addSum(0);


console.log(sum(0));
console.log(sum(2));
console.log(sum(5));
console.log(sum(10));
console.log(sum(20));