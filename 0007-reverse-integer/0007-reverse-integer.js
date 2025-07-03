/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = 0;
    let originalNumber = Math.abs(x);
    while(originalNumber > 0){
        let digit = originalNumber % 10;
        reversed = (reversed * 10) + digit;
        originalNumber= Math.floor(originalNumber / 10);
    }

    if(x < 0){
        reversed = -reversed;
    }

    if(reversed > Math.pow(2, 31) - 1 || reversed < Math.pow(-2, 31)){
        return 0;
    }
    return reversed;
};