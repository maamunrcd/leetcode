/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let covertStrToArray = s.split(" ");
    for(let i = covertStrToArray.length -1; i >= 0; i--){
        if(covertStrToArray[i] !== ''){
            return covertStrToArray[i].length;
        }
    }
};