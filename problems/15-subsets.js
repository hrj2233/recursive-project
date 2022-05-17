/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// your code here
const subsets = (nums) => {
  let res = []; // the final arr, which we will display
  let auxArr = [],
    i = 0; // global vars

  function recur(nums, i, auxArr) {
    if (i == nums.length) {
      res.push(auxArr);
      return;
    } //operation of recursion will be upto i=n-1
    // when it will hit, i==n, it will store the computed arr, in the final arr, and break(return)

    // take it
    recur(nums, i + 1, [...auxArr, nums[i]]); //or, we can use 'aux.concat(nums[i])'

    // dont take
    recur(nums, i + 1, auxArr);
  }

  recur(nums, i, auxArr); // passing the global variable declared already
  return res; // rerturn the final 2d arr
};
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
