/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function (string_a, string_b) {
	let carryOver = 0;
	let num1 = 0;
	let num2 = 0;

	// Create outputs dict
	outputs = {
		3: 1,
		2: 0,
		1: 1,
		0: 0,
	};

	// Set which string is larger and which is smaller
	let larger_string = string_a.length > string_b.length ? string_a : string_b;
	let smaller_string = string_a.length > string_b.length ? string_b : string_a;

	// Conver the larger string into an array of ints
	let larger_array = larger_string.split("").map((i) => parseInt(i));

	// Get the indexes equal to the length-1 of the larger and smaller strings
	let larger_index = larger_array.length - 1;
	let smaller_index = smaller_string.length - 1;

	while (larger_index >= 0) {
		// If smaller string has ended resulting in NaN, and there's no carry over bit
		if (smaller_index < 0 && carryOver === 0) {
			return larger_array.join("");
		}
		// If smaller string has ended, but there's a carry over bit, insert placeholder 0
		else if (smaller_index < 0 && carryOver === 1) {
			num2 = 0;
		} else {
			num2 = parseInt(smaller_string[smaller_index]);
		}
		num1 = parseInt(larger_array[larger_index]);

		// Get output key by adding nums at both string indexes and carry over
		outputKey = num1 + num2 + carryOver;

		// Set the larger string[index] to the outputs[outputKey] value
		larger_array[larger_index] = outputs[outputKey];

		switch (outputKey) {
			case 3: // outputKey is 3 -> (1+1+1)
				carryOver = 1;
				break;
			case 2: // outputKey is 2 -> (1+1+0, 1+0+1, 0+1+1)
				carryOver = 1;
				break;
			case 1: // outputKey is 1 -> (1+0+0, 0+1+0, 0+0+0)
				carryOver = 0;
				break;
			default: // outputKey is 0 -> (0+0+0)
				carryOver = 0;
				break;
		}
		// Reduce both indexes
		larger_index--;
		smaller_index--;
	}

	// If carry over was 1 when the end of larger_array was reached
	if (carryOver) {
		larger_array.unshift(1);
	}

	return larger_array.join("");
};

// var addBinary2 = function (a, b) {
// 	let aArr = a.split("");
// 	let bArr = b.split("");
// 	// let maxLen = aArr.length
// 	// let maxLen = bArr.length > aArr.length ? bArr.length : aArr.length;

// 	let count = 0;
// 	// a = 110010
// 	if (bArr.length > aArr.length) {
// 		let diff = bArr.length - aArr.length;
// 		while (count < diff) {
// 			aArr.unshift("0");
// 			count++;
// 		}
// 	}

// 	// b =
// 	if (bArr.length < aArr.length) {
// 		let diff = aArr.length - bArr.length;
// 		while (count < diff) {
// 			bArr.unshift("0");
// 			count++;
// 		}
// 	}
// 	// console.log(aArr);
// 	// console.log(bArr);

// 	let newArr = [];
// 	let carryOver = 0;
// 	for (let i = bArr.length; i >= 0; i--) {
// 		// console.log(newArr);
// 		if (carryOver === 0) {
// 			if (aArr[i] === "1" && bArr[i] === "1") {
// 				newArr.unshift(0);
// 				carryOver = 1;
// 			} else if (aArr[i] === "0" && bArr[i] === "0") {
// 				newArr.unshift(0);
// 			}
// 			if (aArr[i] === "0" && bArr[i] === "1") {
// 				newArr.unshift(1);
// 			}
// 			if (aArr[i] === "1" && bArr[i] === "0") {
// 				newArr.unshift(1);
// 			}
// 		} else if (carryOver === 1) {
// 			if (aArr[i] === "0" && bArr[i] === "0") {
// 				newArr.unshift(1);
// 				carryOver = 0;
// 			} else if (aArr[i] === "0" && bArr[i] === "1") {
// 				newArr.unshift(0);
// 			} else if (aArr[i] === "1" && bArr[i] === "0") {
// 				newArr.unshift(0);
// 			} else if (aArr[i] === "1" && bArr[i] === "1") {
// 				newArr.unshift(1);
// 				// carryOver = 1;
// 			}
// 		}
// 	}
// 	if (carryOver) {
// 		newArr.unshift(1);
// 	}
// 	return newArr.join("");
// };

console.time("binary add");
console.log(addBinary("110010", "100")); // 110110
console.timeEnd("binary add");

// console.time("binary add 2");
// console.log(addBinary2("110010", "100")); // 110110
// console.timeEnd("binary add 2");
// console.log(addBinary("1111", "1111")); // 111110
// console.log(addBinary("100", "1")); // 101
// console.log(addBinary("0", "0")); // 0

// @lc code=end
