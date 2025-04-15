/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = 0;
    let originalNum = Math.abs(x);
    while(originalNum > 0){
        let digit = originalNum % 10;
        reversed = (reversed * 10) + digit;
        originalNum = Math.floor(originalNum / 10);
    }
    if(x < 0){
        reversed = -reversed;
    }
    if(reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1){
        return 0;
    }
    return reversed;
};

