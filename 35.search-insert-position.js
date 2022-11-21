/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	let len = nums.length;
	if (len < 1) {
		return 1;
	}

	if (nums[len - 1] < target) {
		return len;
	}
};

// searchInsert([1, 3, 5, 6], 5);

// @lc code=end
