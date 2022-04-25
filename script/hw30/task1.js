'use strict';

function count () {
    let counter = 0;
    function addCounter(num) {
        return counter += num;
    }
    return {
        increment: function (){
            addCounter(1)
        },
        decrement: function () {
            addCounter(-1)
        },
        value: function () {
            return counter;
        },
    }
}

let counterOne = count();
let counterTwo = count();

counterOne.increment();
counterOne.increment();
counterOne.increment();
counterOne.decrement();

counterTwo.increment();
counterTwo.increment();
counterTwo.increment();
counterTwo.increment();
counterTwo.decrement();

console.log(counterOne.value());
console.log(counterTwo.value());