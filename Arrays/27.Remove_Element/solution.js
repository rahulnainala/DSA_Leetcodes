/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    //check if array[value] is not eq to our target val
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

let nums = [3, 2, 2, 3]; // Input array
let val = 3; // Value to remove
// Output: 2, nums = [2, 2, _, _]
let k = removeElement(nums, val);
console.log(k); // Output: 2
console.log(nums.slice(0, k)); // Output: [2, 2]
