/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let obj = new Map();
    for(let i = 0; i < numbers.length; i++){
        let compare = target - numbers[i];
        if(obj.has(compare)){
            return [obj.get(compare)+ 1, i+1]
        }
        obj.set(numbers[i], i);
    }
};