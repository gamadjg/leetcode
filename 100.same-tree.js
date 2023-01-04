/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
	// if both nodes are null
	if (p === null && q === null) {
		return true;
	}
	// p or q might be null, or they're both nodes
	if (p === null) {
		return false;
	}
	if (q === null) {
		return false;
	}
	// both p and q were nodes, check vals and recusively check left and right nodes
	return (
		p.val === q.val &&
		isSameTree(p.left, q.left) &&
		isSameTree(p.right, q.right)
	);
};
// @lc code=end
