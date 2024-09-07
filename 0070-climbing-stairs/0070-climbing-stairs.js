/**
 * @param {number} n
 * @return {number}
 */
let obj = {};
var climbStairs = function(n) {
    if(obj[n]) {
        return obj[n];
    }
    if(n <= 1) return 1;
    obj[n] = climbStairs(n - 1) + climbStairs(n - 2);
    return obj[n];
};