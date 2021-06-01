const eqArrays = require("../eqArrays.js");
const assertEqual = require("../assertEqual.js")
console.log(eqArrays([1, 2, 3, 4, 6], [1, 2, 3, 4, 6])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS