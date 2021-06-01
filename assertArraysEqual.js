const eqArrays = require("./eqArrays.js")
const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(` ✅️✅️✅️ Assertion Passed: ${array1} === ${array2}`)
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${array1} !== ${array2}`)
  }
};
module.exports = assertArraysEqual;
