const flatten = function(array) {
  let newArray = [];
  array.forEach(element => {
    if (Array.isArray(element)) {
      for (let item of element) {
        newArray.push(item);
      }
    } else newArray.push(element);
  });
  return newArray;
};
console.log(flatten([1, 2, [3, 4], 5, [6]]));