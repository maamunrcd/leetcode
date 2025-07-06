/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if(n === 0) return arr;
    const result = [];
    function flatten(arr, lavel){
        for(let item of arr){
            if(Array.isArray(item) && lavel > 0){
                flatten(item, lavel-1);
            } else {
                result.push(item);
            }
        }
    }
    flatten(arr, n);
    return result;
};