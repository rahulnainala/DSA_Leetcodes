/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let res = BigInt(digits.join(""));
  let inc = String(BigInt(res) + 1n);
  console.log(inc);
  let t = inc.toString().split("").map(Number);

  return t;
};
let k = plusOne([1, 2, 3]);
console.log(k);
