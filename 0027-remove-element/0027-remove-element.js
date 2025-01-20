/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    let n = nums.length;
    while(i < n){
        if(nums[i] == val){
            nums[i] = nums[n-1];
            n -= 1;
        } else {
            i+=1;
        }
    }
    return n;
};