'use strict';
const maxDiff = require('./index.js');

let numbers = [2, 1, 3, 5, 4];
console.log(maxDiff(numbers));
console.log(maxDiff([]));
console.log(maxDiff([2]));
console.log(maxDiff([2, 3]));
console.log(maxDiff([3, 2]));
console.log(maxDiff([2, 3]));

let collection = numbers.map(number => {
  return { number: number };
});

console.log(maxDiff(collection, (a,b) => b.number-a.number));
