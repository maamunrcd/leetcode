/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    if(nums.includes(0)) return 0;
    let neg = 0;
    for(let num of nums){
        if(num < 0){
            neg++;
        }
    }
    return neg % 2 == 0 ? 1 : -1;
};