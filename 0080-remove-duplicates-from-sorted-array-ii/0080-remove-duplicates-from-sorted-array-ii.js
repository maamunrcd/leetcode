/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 2;
    if(nums.length <=left) return nums.length;

    for(let i =2; i< nums.length; i++){
        if(nums[i] !== nums[left-2]){
            nums[left] = nums[i];
            left++;
        }
    }
    return left;
};