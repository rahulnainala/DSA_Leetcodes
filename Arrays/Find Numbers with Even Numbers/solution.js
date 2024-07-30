/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let evenDigitCount = 0;

  for (let num of nums) {
    let digitCount = num.toString().length;
    if (digitCount % 2 === 0) {
      evenDigitCount++;
    }
  }

  return evenDigitCount;
};

let arr = [555, 901, 482, 1771];
console.log(findNumbers(arr));
