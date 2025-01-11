/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let result = 0;
    for(let i = 0; i < mat.length; i++){
        result+= mat[i][i];
    }
    for(let i = 0; i < mat.length; i++){
        result+= mat[i][mat.length - 1 - i];
    }
    if (mat.length % 2 === 1) {
        const midIndex = Math.floor(mat.length / 2);
        result -= mat[midIndex][midIndex];
    }
    return result;
};