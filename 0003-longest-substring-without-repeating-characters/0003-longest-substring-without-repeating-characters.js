/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length;
    let maxLength = 0;
    for(let i = 0; i < s.length; i++){
        const obj = {};
        for(let j = i; j < s.length; j++){
            if(obj[s[j]] === 1) break;
            maxLength = Math.max((j - i + 1), maxLength);
            obj[s[j]] = 1;
        }
    }
    return maxLength;
};