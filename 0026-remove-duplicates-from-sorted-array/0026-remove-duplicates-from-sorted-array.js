/**
 * @param {number[]} nums
 * @return {number}
 */
 
var removeDuplicates = function(nums) {
    let left = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[i-1]){
            nums[left] = nums[i]
            left++;
        }
    }
    return left;
};