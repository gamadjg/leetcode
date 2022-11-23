/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	const memo = { 1: 1, 2: 2 };
	let count = 3;
	while (count <= n) {
		memo[count] = memo[count - 1] + memo[count - 2];
		count++;
	}
	return memo[n];
};

// @lc code=end
