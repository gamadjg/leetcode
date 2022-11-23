/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */

let list = [];
var mySqrt = function (x) {
	let mid = 0;
	let low = 0;
	let high = x;

	while (low < high) {
		mid = (low + high) >> 1;
		// console.log(low, mid, high);
		if (mid * mid === x) {
			return mid;
		} else if (mid * mid < x) {
			low = mid + 1;
		} else if (mid * mid > x) {
			high = mid - 1;
		}
	}

	if (x < high * high) {
		return high - 1;
	} else {
		return high;
	}
};
// console.log(mySqrt(3));

// @lc code=end
