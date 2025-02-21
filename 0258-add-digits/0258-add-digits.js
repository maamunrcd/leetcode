/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(num > 9) {
        num = (num % 10) + Math.floor(num / 10);
    }
    return num;
};