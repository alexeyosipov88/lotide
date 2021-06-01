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
module.exports = eqObjects;

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects({a: 1}, {a: 1}));