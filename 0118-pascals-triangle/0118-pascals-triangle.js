/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [[1]];
    for(let i = 1; i < numRows; i++){
        if(i >= 2){
            let newArray = [1];
            let lastArray = result[result.length -1];
            for(let j = 0; j < lastArray.length; j++){
                if(lastArray[j+1] != undefined){
                    newArray.push(lastArray[j] + lastArray[j+1])
                }
            }
            newArray.push(1);
            result.push(newArray);
        } else {
            result.push([1, 1]); 
        }
    }
    return result;
};