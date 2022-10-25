/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
	let current = 0;
	for (let i = current + 1; i < nums.length; i++) {
		if (nums[current] + nums[i] === target) {
			return [current, i];
		} else if (i == nums.length - 1) {
			current++;
			i = current;
		}
	}
};

// @lc code=end
