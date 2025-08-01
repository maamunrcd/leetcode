/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    const obj = {};
    for(let i = 0; i < s.length; i++){
        obj[s[i]] = (obj[s[i]] || 0) + 1;
        obj[t[i]] = (obj[t[i]] || 0) - 1;
    }
    return Object.values(obj).every(value => value ===0);
};