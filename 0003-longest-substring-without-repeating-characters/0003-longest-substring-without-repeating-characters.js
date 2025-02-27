/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const newObj = new Map();
    let left, right;
    left = 0, right = 0;
    let maxLength = 0;
    while(right < s.length){
        if(newObj.has(s[right]) && newObj.get(s[right]) >= left){
            left = newObj.get(s[right]) + 1; 
        }
        newObj.set(s[right], right);
        maxLength = Math.max(maxLength, (right - left + 1));
        right++;
    }
    return maxLength;
};