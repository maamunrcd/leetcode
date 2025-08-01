/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort((a, b)=> a - b);
    let left = 0;
    while(left < nums.length){
        if(nums[left] == nums[left+1]){
            return true;
        }
        left++;
    }
    return false;
};