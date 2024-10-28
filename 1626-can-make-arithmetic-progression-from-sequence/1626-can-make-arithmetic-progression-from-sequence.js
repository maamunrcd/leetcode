/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    let sortArr = arr.sort((a, b)=> a - b);
    let dif = sortArr[1] - sortArr[0];
    for(let i = 0; i < sortArr.length-1; i++){
        if(sortArr[i+1] - sortArr[i] != dif){
            return false;
        }
    }
    return true;
};