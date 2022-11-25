/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	// Nothing to merge, return.
	if (m > 0 && n === 0) {
		// console.log(nums1);
		return;
	}
	// Replace value of m[0] with value of n[1]
	if (m === 0 && n === 1) {
		// console.log(nums1);
		nums1[0] = nums2[0];
		return;
	}
	// No arrays to merge
	if (m === 0 && n === 0) {
		// console.log(nums1);
		return;
	}

	// Array traversal indexes
	let i = 0;
	let j = 0;

	while (j < n) {
		// console.log(nums1[i], nums2[j], i, j, m);

		// If nums1[i] > nums2[j] and i still less than m,
		if (nums1[i] > nums2[j] && i < m) {
			nums1.splice(i, 0, nums2[j]);
			nums1.pop();
			i++;
			j++;
			m++;
			// If i >= m, only zero's remaining. Throw in any remaining nums2[j]
		} else if (i >= m) {
			nums1.splice(i, 0, nums2[j]);
			nums1.pop();
			i++;
			j++;
		}
		// nums2[i] was greater than nums1[i], therefore no changes this loop.
		else {
			i++;
		}
		// console.log(nums1);
	}
};

// merge([0], 0, [1], 1); // [1]
// merge([1], 1, [], 0); // [1]
// merge([1, 0], 1, [2], 1); // [1,2]
// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); //[ 1, 2, 2, 3, 5, 6 ]
// merge([0, 0, 4, 0, 0, 0], 3, [1, 2, 5], 3); // [ 0, 0, 1, 2, 4, 5 ]
// merge([1, 2, 3, 0, 0, 0], 3, [0, 5, 6], 3); // [ 0, 1, 2, 3, 5, 6 ]
// merge([4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5); // [ 1, 2, 3, 4, 5, 6 ]
// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // [ 1, 2, 2, 3, 5, 6 ]
// @lc code=end
