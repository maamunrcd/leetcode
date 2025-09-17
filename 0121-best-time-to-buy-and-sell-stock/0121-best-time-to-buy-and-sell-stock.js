/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let left = 0;
    let right = left + 1;
    while(left < prices.length && right < prices.length){
        profit = Math.max(profit, (prices[right]- prices[left]));
        if(prices[left] > prices[right]){
            left++;
            right = left+1;
        } else {
            right++;
        }
    }
    return profit;
};