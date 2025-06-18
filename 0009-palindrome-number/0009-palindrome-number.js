/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let dump = x;
    let reversedNumber = 0;
    while(x > 0){
        let digit = x % 10;
        reversedNumber = (reversedNumber * 10) + digit;
        x = Math.floor(x / 10);
    }
    return reversedNumber === dump;
};