
const letterPositions = function(string) {
  const results = {};
  for (letter in string) {
    console.log(string[letter])
    if (results[string[letter]]) {
      results[string[letter]].push(letter);
    } else if (string[letter] === " ") {
      ;
    } else {
      results[string[letter]] = [];
      results[string[letter]].push(letter);
    }
  }
  return results;
}
module.exports = letterPositions;
console.log(letterPositions("lighthouse in the house"))
