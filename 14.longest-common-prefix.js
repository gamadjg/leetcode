/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	let i = 0;
	let newStr = "";
	let oldVal = "";
	while (i < strs[0].length) {
		newStr += strs[0][i];
		for (let j = 1; j < strs.length; j++) {
			if (!strs[j].startsWith(newStr)) {
				return oldVal;
			}
		}
		oldVal = newStr;
		i++;
	}
	return oldVal;
};
// @lc code=end
