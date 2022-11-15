/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	let arrLen = nums.length;
	let i = 0;
	let stepCount = 0;
	while (i < arrLen) {
		if (nums[i] === val) {
			nums[i] = "_";
			stepCount++;
		} else if (stepCount === 0) {
		} else {
			nums[i - stepCount] = nums[i];
			nums[i] = "_";
		}
		i++;
	}
	return arrLen - stepCount;
};

// @lc code=end
