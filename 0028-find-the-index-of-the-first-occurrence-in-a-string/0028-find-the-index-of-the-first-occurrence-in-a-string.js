/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for(let i = 0; i < haystack.length; i++){
        let match = true;
        for(let j = 0; j < needle.length; j++){
            if(needle[j] !== haystack[j + i]){
                match = false;
            }
        }
        if(match){
            return i;
        }
    }
    return -1;
};