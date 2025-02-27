/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = {};
    let left = 0;
    while(left < nums.length){
        if(obj.hasOwnProperty(target - nums[left])){
            return [obj[target - nums[left]], left];
        }
        obj[nums[left]] = left;
        left++;
    }
};