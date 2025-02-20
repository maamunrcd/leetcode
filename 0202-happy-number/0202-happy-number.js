/**
 * @param {number} n
 * @return {boolean}
 */

var sumOfSquares = function(n){
    let sum = 0;
    while(n > 0){
        let digit = n % 10;
        sum+= digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
}
var isHappy = function(n) {
    let seen = new Set();
    while(n !== 1 && !seen.has(n)){
        seen.add(n);
        n = sumOfSquares(n);
    }
    return n === 1;
};