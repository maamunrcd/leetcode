/*
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let left = 0;
    let right = left+1;
    while(right < prices.length){
        if(prices[left] > prices[right]){
            left = right;
            right = left+1;
        } else {
            maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
            right++;
        }
    }
    return maxProfit;
};