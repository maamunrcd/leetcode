/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    for(let i =0; i < arr.length; i++){
        let max = -Infinity;
        for(let j = i+1; j < arr.length; j++){
            max = Math.max(max, arr[j]);
        }
        arr[i] = max;
    }
    arr[arr.length -1] = -1;
    return arr;
};