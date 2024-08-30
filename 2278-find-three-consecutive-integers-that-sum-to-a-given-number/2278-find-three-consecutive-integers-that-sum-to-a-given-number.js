/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function(num) {
    if(num % 3 !== 0) return [];
    let divisionVal = num / 3;
    return [divisionVal-1, divisionVal, divisionVal + 1]
};