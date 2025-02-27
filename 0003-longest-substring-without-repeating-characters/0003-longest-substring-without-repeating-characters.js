/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const newMap = new Map();
    let left, right, maxLength;
    left = 0, right = 0, maxLength = 0;
    while(right < s.length){
        if(newMap.has(s[right]) && newMap.get(s[right]) >= left){
            left = newMap.get(s[right]) + 1;
        }
        newMap.set(s[right], right);
        maxLength = Math.max(maxLength, (right - left + 1));
        right++;
    }
    return maxLength;
};