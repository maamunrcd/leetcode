/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    const countChar = {};
    for(let i = 0; i < s.length; i++){
        countChar[s[i]] = (countChar[s[i]] || 0) + 1;
        countChar[t[i]] = (countChar[t[i]] || 0) - 1;
    }
    return Object.values(countChar).every(item => item === 0);
};