/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	let sliceAt = 0;
	s = s.trim();
	if (s.length < 2) {
		return 1;
	}

	for (let i = s.length - 1; 0 < i; i--) {
		if (s[i] === " ") {
			sliceAt = i;
			break;
		}
	}
	if (sliceAt === 0) {
		return s.length;
	}

	return s.length - (sliceAt + 1);
};

// console.time("lengthOfLastWord");
// console.log(lengthOfLastWord(" a"));
// console.timeEnd("lengthOfLastWord");

// @lc code=end
