/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = 0;
    let originalNum = Math.abs(x);
    let num = originalNum;
    while(num > 0){
        let digit = num % 10;
        reversed = (reversed * 10) + digit; 
        num = Math.floor(num / 10);
    }
    if(x < 0){
        reversed = -reversed;
    }

    if(reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1){
        return 0;
    }

    return reversed;
};