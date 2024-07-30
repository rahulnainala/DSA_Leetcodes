//Time Complexity : O(n²)
//Use Hash map for optimization

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
  // return an empty array if no solution is found
};

console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]

/*
 * Approach : Take two pointers and keep one on the first element and then search for the solution based on the question
 */
