/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
	// If listNode is empty return empty listNode
	if (!head) {
		return head;
	}

	// Create currentNode to iterate through the list
	let currentNode = head;

	// Create tempNode and set to the first node in the list
	let tempNode = head;
	// console.log(currentNode.val, tempNode.val);

	// Loop through the list
	while (currentNode.next !== null) {
		// Set currentNode to the next node
		currentNode = currentNode.next;

		// Duplicates found
		if (currentNode.val === tempNode.val) {
			// console.log("removing val: " + currentNode.val);
			// Set the tempNode.next to the current node
			tempNode.next = currentNode.next;
		} else {
			// Update the tempNode to the next node on no duplicates
			tempNode = tempNode.next;
		}
	}
	// Return new linkedList
	return head;
};

// @lc code=end
