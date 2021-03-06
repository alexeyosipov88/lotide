const tail = require("../tail.js");
const result = tail(["Hello", "Lighthouse", "Labs"]);
const assertEqual = require("../assertEqual.js");
const assert = require('chai').assert;

describe("#tail", () => {
  it(`returns [Lighthouse, Labs]`, () => {
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
})


// const words = ["Yo Yo", "Lighthouse", "Labs"];

// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"
// // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
