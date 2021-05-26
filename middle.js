const eqArrays = function(array1, array2) {
  let check = true;
  if (array1.length !== array2.length)
    return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i])
      return false;
  }
  return check;
};
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true)
    console.log(` ✅️✅️✅️ Assertion Passed: ${array1} === ${array2}`);
  else console.log(`🛑️🛑️🛑️ Assertion Failed: ${array1} !== ${array2}`);
};

const middle = function(array) {
  if (array.length === 1 || array.length === 2)
    return [];
  else if (array.length % 2 === 0)
    return array.slice((array.length / 2) - 1, ((array.length / 2) - 1) + 2);
  else return array.slice((array.length - 1) / 2, ((array.length - 1) / 2) + 1);
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]