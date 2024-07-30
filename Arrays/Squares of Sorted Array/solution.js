/**
 * @param {number[]} nums
 * @return {number}
 */

//Time Complexity of O(n2)
var sortedSquares = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    for (let k = 0; k < nums.length; k++) {
      if (nums[k] > nums[j]) {
        let temp = nums[j];
        nums[j] = nums[k];
        nums[k] = temp;
      }
    }
  }
  return nums;
};

//Optimized Solution
//Time Complexity of O(nlogn)
var sortedSquares2 = function (nums) {
  let squared = nums.map((num) => num * num);

  squared.sort((a, b) => a - b);

  return squared;
};

let arr = [-7, -3, 2, 3, 11];
console.log(sortedSquares(arr));
