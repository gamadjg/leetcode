/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
	if (root === 0) {
		return root;
	}
	let arr = [];
	/*
		If root not null, push the return of left node, then push root,
		then push root.right, return
	*/
	if (root !== null) {
		// if left node is empty, will return empty array
		arr.push(...inorderTraversal(root.left));
		// Always push the root node since we know it exists
		arr.push(root.val);
		// if right node is empty, will return empty array
		arr.push(...inorderTraversal(root.right));
	}
	return arr;
	// console.log(root);
};
// @lc code=end
