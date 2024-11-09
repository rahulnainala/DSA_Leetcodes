/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let ans = [];
  let length = nums.length;

  // First loop to copy the original array
  for (let i = 0; i < length; i++) {
    ans[i] = nums[i];
  }

  // Second loop to copy the original array again
  for (let i = 0; i < length; i++) {
    ans[i + length] = nums[i];
  }

  return ans;
};

let result = getConcatenation([1, 2, 1]);
console.log(result); // Output: [1, 2, 1, 1, 2, 1]
