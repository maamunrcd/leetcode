/**
 * @param {string} 
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let length = 0;
    for(let i = s.length-1; 0 <= i; i--){
        if(length && s[i] === " "){
            return length;
        } else if(s[i] === " "){
            continue;
        }
        length++;
    }
    return length;
};