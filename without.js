
const eqArrays = function(array1, array2) {
  let check = true;
  if (array1.length !== array2.length)
    return false;
  for (let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[i]) 
    return false;
  }
  return check;
};
const arraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true)
    console.log(` ✅️✅️✅️ Assertion Passed: ${array1} === ${array2}`)
  else console.log(`🛑️🛑️🛑️ Assertion Failed: ${array1} !== ${array2}`)
};
const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        newArray.push(i);
        break;
      }
    }
  }
  let result = [];
    for (let x = 0; x < source.length; x++) {
      if (!newArray.includes(x)) {
        result.push(source[x]);
      }
    }
  return result;
}

console.log(without([1, 2, 3, false, 4, 5, 6, true, 9], [1, 3, true, 6, 3])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"] 