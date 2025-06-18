/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = new Map();
    let left = 0;
    while(left < nums.length){
        let diff = target - nums[left];
        if(obj.has(diff)){
            return [obj.get(diff), left];
        }
        obj.set(nums[left], left);
        left++;
    }
};