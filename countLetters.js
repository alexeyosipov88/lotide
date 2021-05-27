const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(` ✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🛑️🛑️🛑️ Assertion Failed: ${actual} !== ${expected}`);
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
const countLetters = function(sentence) {
  let result = {};
  for (letter of sentence) {
    if(result[letter]) 
      result[letter] += 1;
    else if (letter === " ")
      ;
    else result[letter] = 1;
  } 
  return result;
}
console.log(countLetters("I am a very successful programmer in Canada"));