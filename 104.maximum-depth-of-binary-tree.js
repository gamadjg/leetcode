/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
	// If root is null, return 1
	if (root === null) {
		return null;
	}

	// Recursive call for maxDepth on root.left and root.right, and check which is deeper
	let maxL = maxDepth(root.left) + 1;
	let maxR = maxDepth(root.right) + 1;

	// Return deeper of the two recursive calls
	return maxL > maxR ? maxL : maxR;
};
// @lc code=end
