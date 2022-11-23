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
	if (nums.length < 1) {
		return 1;
	} else if (target > nums[nums.length - 1]) {
		return nums.length;
	} else if (target < nums[0]) {
		return 0;
	}

	let low = 0;
	let mid = 0;
	let high = nums.length;

	while (low <= high) {
		mid = (low + high) >> 1;
		// console.log(low, mid, high);
		if (nums[mid] === target) {
			return mid;
		} else if (nums[mid] > target) {
			high = mid - 1;
		} else if (nums[mid] < target) {
			low = mid + 1;
		}
	}
	return high + 1;
};

// console.log(searchInsert([1, 3, 5, 6], 0)); // 0
// console.log(searchInsert([1, 3, 5, 6], 7)); // 4
// console.log(searchInsert([1, 3, 5, 6], 5)); // 2
// console.log(searchInsert([1, 3, 5, 6], 6)); // 3
// console.log(searchInsert([1, 3, 5, 6], 2)); // 1
// console.log(searchInsert([1, 3], 2)); // 1

// @lc code=end
