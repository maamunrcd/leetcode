/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let a = Math.min(...nums);
    let b = Math.max(...nums);
    while(b){
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};