/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const memo = {};
    function maxSum(index){
        if(index == nums.length - 1) return nums[index];
        if(index >= nums.length) return 0;
        if(memo[index] !== undefined){
            return memo[index];
        }
        return memo[index] = nums[index] + Math.max(maxSum(index + 2), maxSum(index+3));
    }
    return Math.max(maxSum(0), maxSum(1));
};