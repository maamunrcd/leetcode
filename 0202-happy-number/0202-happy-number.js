/**
 * @param {number} n
 * @return {boolean}
 */
var sumOfSquares = function(n){
    let sum = 0;
    while(n > 0) {
        let digit = n % 10;
        sum+= digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
}
var isHappy = function(n) {
    let slow = n;
    let fast = n;
    do {
        slow = sumOfSquares(slow);
        fast = sumOfSquares(sumOfSquares(fast))
    } while(slow !== fast);
    return slow === 1;
};