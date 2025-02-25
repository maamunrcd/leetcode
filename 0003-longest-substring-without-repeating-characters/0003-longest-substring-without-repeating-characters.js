/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const objMap = new Map();
    let maxLength = 0;
    let left, right;
    left = 0;
    right = 0;
    while(right < s.length){
        if(objMap.has(s[right]) && objMap.get(s[right]) >= left){
            left = objMap.get(s[right]) + 1;
        }

        objMap.set(s[right], right);
        maxLength = Math.max(maxLength, (right - left+1));
        right++;
    }
    return maxLength;
};