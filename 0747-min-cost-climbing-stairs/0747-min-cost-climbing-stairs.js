/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const memo = {};
    return Math.min(calculateMinCost(0, cost, memo), calculateMinCost(1, cost, memo));
}

function calculateMinCost(index, cost, memo) {
    if (index in memo) return memo[index];
    
    if (index === cost.length - 1) return cost[index];
    if (index >= cost.length) return 0;
    
    memo[index] = cost[index] + Math.min(calculateMinCost(index + 1, cost, memo), calculateMinCost(index + 2, cost, memo));
    
    return memo[index];
}