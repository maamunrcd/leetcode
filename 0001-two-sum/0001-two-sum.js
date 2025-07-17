/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = new Map();
    for(let i = 0; i < nums.length; i++){
        let compare = target - nums[i];
        if(obj.has(compare)){
            return [i, obj.get(compare)];
        }
        obj.set(nums[i], i);
    }
};
