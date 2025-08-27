/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let maxCount = 0;
    let numsMap = new Map();

    for(let key of nums){
        numsMap.set(key, true);
    }

    for(let key of numsMap.keys()){
        if(!numsMap.has(key - 1)){
            let count = 1;
            let current = key;

            while(numsMap.has(current+1)){
                count++;
                current++;
            }
            maxCount = Math.max(maxCount, count);
        }
    }

    return maxCount;
};