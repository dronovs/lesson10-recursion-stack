'use strict'

function arrFill (arr) {

    return function getRandomEl () {
        let el = Math.round(Math.random() * 100);

        return arr.includes(el) ? getRandomEl() : arr.push(el);

    }

}

let exampleArr = [];
let randomizeArr = arrFill(exampleArr);

randomizeArr();
randomizeArr();
randomizeArr();
randomizeArr();
randomizeArr();
randomizeArr();
randomizeArr();
randomizeArr();
randomizeArr();
randomizeArr();

console.log(exampleArr);
