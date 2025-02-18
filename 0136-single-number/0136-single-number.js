/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(nums.length  === 1) return nums[0];
    const obj = {};
    for(let i = 0; i < nums.length; i++){
        obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
    }
    return Number(Object.entries(obj).find(([key, value]) => value === 1)?.[0]);
};