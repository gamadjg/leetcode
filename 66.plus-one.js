/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function (digits) {
// 	let newArr = [];
// 	for (let i = digits.length - 1; i >= 0; i--) {
// 		if (digits[i] === 9) {
// 			newArr.unshift(0);
// 		} else {
// 			digits[i]++;
// 			newArr.unshift(digits[i]);
// 			return digits.slice(0, i).concat(newArr);
// 		}
// 	}
// 	newArr.unshift(1);
// 	return newArr;
// };

var plusOne = function (digits) {
	for (let i = digits.length - 1; i >= 0; i--) {
		if (digits[i] === 9) {
			digits[i] = 0;
		} else {
			digits[i]++;
			return digits;
		}
	}
	digits.unshift(1);
	return digits;
};

// console.time("plusOne");
// console.log(plusOne([1, 2, 9]));
// console.timeEnd("plusOne");
// @lc code=end
