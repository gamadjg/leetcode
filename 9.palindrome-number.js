/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	const strVal = x + "";
	for (let i = 0; i < strVal.length / 2; i++) {
		if (strVal[i] !== strVal[strVal.length - 1 - i]) {
			return false;
		}
	}
	return true;
};

// @lc code=end
