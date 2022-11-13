/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	if (s.length < 2) {
		return false;
	}
	const arr = [];
	for (const val of s) {
		if (val === "{" || val === "(" || val === "[") {
			arr.push(val);
		} else {
			if (val === "}" && arr[arr.length - 1] === "{") {
				arr.pop();
			} else if (val === ")" && arr[arr.length - 1] === "(") {
				arr.pop();
			} else if (val === "]" && arr[arr.length - 1] === "[") {
				arr.pop();
			} else {
				return false;
			}
		}
	}
	if (arr.length !== 0) {
		return false;
	}
	return true;
};

// @lc code=end
