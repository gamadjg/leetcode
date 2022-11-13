/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
	if (list1 === null) return list2;
	if (list2 === null) return list1;

	let newList = new ListNode(0, null);
	let currentNode = newList;

	while (list1 && list2) {
		if (list1.val < list2.val) {
			currentNode.next = list1;
			list1 = list1.next;
		} else {
			currentNode.next = list2;
			list2 = list2.next;
		}
		currentNode = currentNode.next;
	}

	if (list1 === null) {
		currentNode.next = list2;
	} else {
		currentNode.next = list1;
	}

	return newList.next;
};

// @lc code=end
