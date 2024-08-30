/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    let maxCount = 0;
    let map = new Map();
    for(let key of nums){
        map.set(key, true);
    }
    for(let key of map.keys()){
        if(!map.has(key-1)){
            let count = 1;
            let current = key;
            while(map.has(current+1)){
                count++;
                current++;
            }
            maxCount = Math.max(maxCount, count);
        }
        
    }
    return maxCount;
};