/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let left, right;
    left = 0;
    right = 1;
    while(right < prices.length){
        if(prices[left] < prices[right]){
            max = Math.max(max, prices[right] - prices[left]);
        } else {
            left = right;
        }
        right = right + 1;
    }
    return max;
};