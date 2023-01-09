/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
 * @return {boolean}
 */
var isSymmetric = function (leftTree, rightTree = leftTree) {
	// If both current nodes are null
	if (!leftTree && !rightTree) {
		return true;
	}

	// One of the two nodes might exist, but not none
	if (!leftTree || !rightTree) {
		return false;
	}

	// If both nodes exist, check for equality
	if (leftTree.val !== rightTree.val) {
		return false;
	}

	// Both current nodes existed and their values were the same
	// Recursively call the next nodes in the subtrees for both current nodes
	return (
		isSymmetric(leftTree.left, rightTree.right) &&
		isSymmetric(leftTree.right, rightTree.left)
	);
};
// @lc code=end
