/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const pref = new Array(n);
    const post = new Array(n);
    const res = new Array(n);

    pref[0] = 1;
    post[n-1] = 1;
    
    for(let i = 1; i < n; i++){
        pref[i] = nums[i - 1] * pref[i - 1];
    }

    for(let i = n - 2; i >= 0; i--){
        post[i] = nums[i + 1] * post[i + 1];
    }

    for(let i = 0; i < n; i++){
        res[i] = post[i] * pref[i];
    }
    return res;
};