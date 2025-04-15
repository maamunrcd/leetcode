/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let dump = x;
    let reversedNum = 0;
    while(x > 0){
        let digit = x % 10;
        reversedNum = (reversedNum * 10) + digit;
        x = Math.floor(x / 10);
    }
    return dump === reversedNum;
};