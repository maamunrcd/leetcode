/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let convertString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = convertString.length -1;
    while(left < right){
        if(convertString[left] !== convertString[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
};