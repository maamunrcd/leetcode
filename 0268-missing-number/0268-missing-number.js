/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let totalSum = nums.length;
    for(let i = 0; i < nums.length; i++){
        totalSum += i-nums[i];
    }
    return totalSum;
};