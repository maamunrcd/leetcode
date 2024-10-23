/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for(let i =0; i < haystack.length; i++){
        if(haystack[i] == needle[0]){
            for(let j = 0; j < needle.length; j++){
                if(haystack[i+j] != needle[j]){
                    break;
                }
                if(haystack[i+j] == needle[j] && (needle.length-1) == j){
                    return i;
                }
            }
        }
    }
    return -1;
};