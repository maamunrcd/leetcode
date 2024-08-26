/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let convertString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    for(let i =0; i < (convertString.length - 1) / 2; i++){
        if(convertString[i] !== convertString[(convertString.length -1) - i]){
            return false;
        }
    }
    return true;
};