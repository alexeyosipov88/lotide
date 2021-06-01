
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @alexeyosipov/lotide`

**Require it:**

`const _ = require('@alexeyosipov/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  head: returns first element of an array
  tail: returns all the elements of an array except the first one
  middle: return the middle element of an array
  assertEqual: asserts if the values returned are equal
  assertArraysEqual: asserts if the arrays are equal
  assertObjectEqual: asserts if the objects are equal
  countLetters: counts the letters in a string passed as an argument
  eqArrays: checks if the arrays are equal
  eqObjects: checks if the objects are equal
  findKey: returns the name of the key if it is in the object
  findKeyByValue: returns the name of the key by value 
  flatten: make two dimensional array into one dimensional
  letterPositions: returns the indexes of the letters in the string
  map: our version of map method 
  takeUntil: returns new array with elements until the one passed as an agrument
  without: returns new array without elements passed as arguments
