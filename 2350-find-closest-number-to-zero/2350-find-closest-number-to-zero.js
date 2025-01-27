/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let cheapest = nums[0];
    for(num of nums){
        if(Math.abs(num) < Math.abs(cheapest)){
            cheapest = num;
        }
    }
    if(cheapest < 0 && nums.includes(Math.abs(cheapest))){
        return Math.abs(cheapest);
    }
    return cheapest;
};