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
	// Create and set carry over bit to 0
	let carryOver = 0;

	// Create outputs dict
	let outputs = {
		3: 1,
		2: 0,
		1: 1,
		0: 0,
	};

	// Set which string is larger and which is smaller
	let larger_string = string_a.length > string_b.length ? string_a : string_b;
	let smaller_string = string_a.length > string_b.length ? string_b : string_a;

	// Get the indexes equal to the length-1 of the larger and smaller strings
	let larger_index = larger_string.length - 1;
	let smaller_index = larger_string.length - 1;

	// Set num1 and num2 to the integer at string[index]
	let num1 = parseInt(larger_string[larger_index]);
	let num2 = parseInt(smaller_string[smaller_index]);

	// decrement index by 1 for the base case
	larger_index--;
	smaller_index--;

	//while index greater than 0
	while (larger_index >= 0) {
		// Get output key by adding nums at both string indexes and carry over
		let outputKey = num1 + num2 + carryOver;

		// Set the larger string[index] to the dict value of the re
		larger_string[larger_index] = outputs[outputKey];

		// console.log(larger_string);

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

		larger_index--;
		smaller_index--;

		// Set new num1 from the value at the larger_string index
		num1 = parseInt(larger_string[larger_index]);

		// If smaller string has ended resulting in NaN, and there's no carry over bit
		if (smaller_index <= 0 && carryOver === 0) {
			// Done, return larger string
			return larger_string;
		}
		// If smaller string has ended resulting in NaN, and there's a carry over bit
		else if (smaller_index <= 0 && carryOver === 1) {
			num2 = 0;
		}
	}
};

// console.log(addBinary("110010", "100"));
// console.log(addBinary("1111", "1111"));
console.log(addBinary("100", "001"));

/*
	create outputs dict
	outputs = {
		0:0 -> (0+0+0)
		1:1 -> (1+0+0, 0+1+0, 0+0+1)
		2:0 -> (1+1+0, 1+0+1, 0+1+1)
		3:1 -> (1+1+1)
	}

	set carryOver to 0

	Get the length of both strings
	-largerLen
	-smallerLen

	Set the index to the length of the larger string (largerLen)
	
	Set num1 to the integer at parseInt(largerStr[index])

	num1 = parseInt(string_a[index])
	num2 = parseInt(string_b[index])

	decrement index by 1

	while index greater than 0
		// Get output key by adding nums at both string indexes and carry over

		switch outputKey
			case 1: result is 1 (1+0+0, 0+1+0, 0+0+0)
				carry over = 0

			case 2: result is 2 (1+1+0, 1+0+1, 0+1+1)
					carry over = 1

			case 3: result is 3 meaning 1+1+1
				carry over = 1

			default: result is 0 (0+0+0)
				larger string[index] = 0

		larger string[index] = outputs[result]

		decrement index by 1

		num1 = parseInt(string_a[index])
		if smaller string[index] =0 NaN and carry over == 0
			done, return 
		else
			num2 = 0
	*/

// ---------------------------Convert strings to array of ints---------------------------
// let arrayA = a.split("").map((i) => parseInt(i));
// let arrayB = b.split("").map((i) => parseInt(i));

// ---------------------------Make arrays same length by adding 0 bits to the smaller array---------------------------
// if (arrayB.length > arrayA.length) {
// 	let diff = arrayB.length - arrayA.length;
// 	while (count < diff) {
// 		arrayA.unshift(0);
// 		count++;
// 	}
// }
// if (arrayB.length < arrayA.length) {
// 	let diff = arrayA.length - arrayB.length;
// 	while (count < diff) {
// 		arrayB.unshift(0);
// 		count++;
// 	}
// }

// console.log(arrayA);
// console.log(arrayB);

// Set counter index to array lengths
// if(arrayA)
// let index = arrayA.length - 1;
// // console.log(index);
// while (index >= 0) {
// 	// console.log(arrayA[index], arrayB[index]);
// 	// if (carryOver === 0) {
// 		switch (arrayA[index] + arrayB[index]) {
// 			case 2: // If 1+1, unshift 0 to new array, and add carry over bit
// 				newArr.unshift(0);
// 				carryOver = 1;
// 				break;
// 			case 1: // If 1+0 or 0+1, unshift 1
// 				newArr.unshift(1);
// 				break;
// 			default: // If 0+0, unshift 0
// 				newArr.unshift(0);
// 				break;
// 		}
// 		// console.log(newArr);
// 		index--;
// 	}

// 	// If there's a carry over after iterating through the arry, unshift 1
// 	if (carryOver) {
// 		newArr.unshift(1);
// 	}
// 	return newArr.join("");
// };
// // console.log(addBinary("110010", "100"));
// console.log(addBinary("1111", "1111"));
// console.log(addBinary("100", "001"));

// ----------------------------------------------------------
// var addBinary = function (a, b) {
// 	let newArr = [];
// 	let carryOver = 0;
// 	let count = 0;

// 	// ---------------------------Convert strings to array of ints---------------------------
// 	let arrayA = a.split("").map((i) => parseInt(i));
// 	let arrayB = b.split("").map((i) => parseInt(i));

// 	// ---------------------------Make arrays same length by adding 0 bits to the smaller array---------------------------
// 	if (arrayB.length > arrayA.length) {
// 		let diff = arrayB.length - arrayA.length;
// 		while (count < diff) {
// 			arrayA.unshift(0);
// 			count++;
// 		}
// 	}
// 	if (arrayB.length < arrayA.length) {
// 		let diff = arrayA.length - arrayB.length;
// 		while (count < diff) {
// 			arrayB.unshift(0);
// 			count++;
// 		}
// 	}

// 	// console.log(arrayA);
// 	// console.log(arrayB);

// 	// Set counter index to array lengths
// 	let index = arrayA.length - 1;
// 	// console.log(index);
// 	while (index >= 0) {
// 		// console.log(arrayA[index], arrayB[index]);
// 		if (carryOver === 0) {
// 			switch (arrayA[index] + arrayB[index]) {
// 				case 2: // If 1+1, unshift 0 to new array, and add carry over bit
// 					newArr.unshift(0);
// 					carryOver = 1;
// 					break;
// 				case 1: // If 1+0 or 0+1, unshift 1
// 					newArr.unshift(1);
// 					break;
// 				default: // If 0+0, unshift 0
// 					newArr.unshift(0);
// 					break;
// 			}
// 		} else {
// 			// carryOver == 1
// 			switch (arrayA[index] + arrayB[index]) {
// 				case 2: // If 1+1, unshift 0 to new array, carry over bit stays 1
// 					newArr.unshift(1);
// 					break;
// 				case 1: // If 1+0 or 0+1, carry over bit makes result 1+1. unshift 0 and carry over bit stays 1
// 					newArr.unshift(0);
// 					// carryOver = 0;
// 					break;
// 				default: // If 0+0 and carry over bit = 1, unshift 1, and set carry over bit to 0
// 					newArr.unshift(1);
// 					carryOver = 0;
// 					break;
// 			}
// 		}
// 		// console.log(newArr);
// 		index--;
// 	}

// 	// If there's a carry over after iterating through the arry, unshift 1
// 	if (carryOver) {
// 		newArr.unshift(1);
// 	}
// 	return newArr.join("");
// };
// // console.log(addBinary("110010", "100"));
// console.log(addBinary("1111", "1111"));
// // console.log(addBinary("100", "001"));

// @lc code=end
