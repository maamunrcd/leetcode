/**
 * @param {number[]} nums
 * @return {number}
 */
 [0, 0, 4, 4]
var removeDuplicates = function(nums) {
    let left, right;
    left = 0;
    right = left+1;
    while(left <= nums.length && right <= nums.length){
        if(nums[left] === nums[right]){
            right++;
        } else {
            left++;
            nums[left] = nums[right];
            right++;
        }
    }
    return left;
};