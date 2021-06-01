const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true)
  console.log(` ✅️✅️✅️ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  else console.log(`🛑️🛑️🛑️ Assertion Failed: ${actual} !== ${expected}`)
}

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


const eqObjects = function(actual, expected) {
  let actualKeys = Object.keys(actual);
  let expectedKeys = Object.keys(expected);
  if (actualKeys.length !== expectedKeys.length)
    return false;
  for(let element in actual) {
    if (typeof actual[element] === "object" && 
    eqArrays(actual[element], expected[element])) 
      return true;
    else if(!expected.hasOwnProperty(element) || 
    actual[element] !== expected[element]) {
      return false;
    }
  }
  return true;
};  

const object1 = {
  movie1: "Kill Bill",
  movie2: "Rosemary's Baby",
  movie3: "American Beauty",  
  obectsToTest: [1, 2, 3, 4]
}
const object2 = {
  movie1: "Kill Bill",
  movie2: "Rosemary's Baby",
  movie3: "American Beauty",
  obectsToTest: [1, 2, 3, 4]
};

module.exports = assertObjectsEqual;