/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = new Map();
    for(let i = 0; i < nums.length; i++){
        const expect = target - nums[i];
        if(obj.has(expect)){
            return [i, obj.get(expect)];
        }
        obj.set(nums[i], i);
    }
};
