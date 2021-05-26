const eqArrays = function(array1, array2) {
  let check = true;
  if (array1.length !== array2.length)
    return false;
  for (let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[i]) 
    return false;
  }
  return check;
}
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true)
    console.log(` ✅️✅️✅️ Assertion Passed: ${array1} === ${array2}`)
  else console.log(`🛑️🛑️🛑️ Assertion Failed: ${array1} !== ${array2}`)
};

arraysEqual([1, 2, 3], [1, 2, 3]) // => true
arraysEqual([1, 2, 3], [3, 2, 1]) 