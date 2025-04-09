/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let originalNum = num;
    let count = 0;
    num = Math.abs(num);
    while(num > 0){
        const digit = num % 10;
        if(digit !== 0 && originalNum % digit === 0){
            count++;
        }
        num = Math.floor(num / 10);
    }
    return count;
};