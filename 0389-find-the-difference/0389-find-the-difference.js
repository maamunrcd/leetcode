/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const strObj = {};
    for(let char of t){
        strObj[char] = (strObj[char] || 0) + 1; 
    }
    for(let char of s){
        strObj[char] = strObj[char] - 1; 
    }

    for(const [key, value] of Object.entries(strObj)){
        if(value === 1){
            return key;
        }
    }
};
