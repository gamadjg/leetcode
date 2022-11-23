/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	if (nums.length < 3) {
		return [];
	}
	let storage = {}; //1: [-1, -1, 2]
	nums = nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length - 2; i++) {
		for (let j = i + 1; j < nums.length - 1; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				if (nums[j] + nums[k] + nums[i] === 0) {
					storage["" + nums[i] + nums[j] + nums[k]] = [
						nums[i],
						nums[j],
						nums[k],
					];
				}
			}
		}
	}

    /*
    tempI = 0+nums[i]
    tempI = -1
    1 = tempJ + tempK
    */
    let i = 0
    let j = i+1
    let k = nums.length
    while(i<nums.length){
        if(j ===k){
            i++
            j = i+1
            k = nums.length
        }
        if(nums[i] <)

/*
[-4,-1,-1,0,1,2]
tempI = -1 (0+nums[i])
searchNum = 1

[-1,0,1,2]
j = -1
k = 2
if(j+k)<searchNum (1)

j = 0
k = 2
if(0+2)>searchNum

j=0
k=1
if(0+1 === searchNum)


0+(-1) = -1
searchNum = 1
sol: [-1, 0, 1]


0-(-1) = 1
searchNum = -1
sol: [1]
nums[i], j, k

searchNum = 4



*/        






    }


	return Object.values(storage);
};
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// @lc code=end
