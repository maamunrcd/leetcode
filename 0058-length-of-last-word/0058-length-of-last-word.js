/**
 * @param {string} 
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let removeStr = s.split(" ");
    for(let i = removeStr.length-1; 0 <= i; i--){
        if(removeStr[i] !==''){
            return removeStr[i].length;
        }
    }
    return 0;
};