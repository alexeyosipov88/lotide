const assertArraysEqual = require("../assertArraysEqual")
const middle = require("../middle")
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.equal(middle([1, 2, 3]), [2]);
  });
})
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);