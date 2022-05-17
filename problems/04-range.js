/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/

// your code here
const range = (startNum, endNum) => {
  if (startNum > endNum) {
    return [];
  } else {
    let numbers = range(startNum, endNum - 1);
    if (startNum !== endNum) {
      numbers.push(endNum - 1);
    }
    return numbers;
  }
};
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
