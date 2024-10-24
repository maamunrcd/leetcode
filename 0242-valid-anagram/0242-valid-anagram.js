/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    let charCount = {};
    for(let i = 0; i < s.length; i++){
        charCount[s[i]] = (charCount[s[i]] || 0) + 1;
        charCount[t[i]] = (charCount[t[i]] || 0) - 1;
    }
    return Object.values(charCount).every(item=> item == 0);
};