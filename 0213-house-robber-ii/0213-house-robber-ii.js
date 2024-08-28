/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1) return nums;
    const memo = {};
    function maxSum(index, first= false){
        if(first && index == nums.length - 1) return 0;
        if(index >= nums.length) return 0;
        if(memo[`${index}${first}`] !== undefined){
            return memo[`${index}${first}`];
        }
        return memo[`${index}${first}`] = nums[index] + Math.max(maxSum(index + 2, first), maxSum(index+3, first));
    }
    return Math.max(maxSum(0, true), maxSum(1), maxSum(2));
};