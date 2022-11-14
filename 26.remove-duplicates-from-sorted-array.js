/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	let historical = nums[0];
	let i = 1;
	let redundantCount = 0;
	while (i < nums.length) {
		if (nums[i] === historical) {
			nums[i] = "_";
			redundantCount++;
		} else if (redundantCount === 0) {
			historical = nums[i];
		} else {
			historical = nums[i];
			nums[i - redundantCount] = nums[i];
			nums[i] = "_";
		}
		i++;
	}
	return nums.length - redundantCount;
};

// @lc code=end
