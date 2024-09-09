/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const obj = {
        "(":")",
        "{":"}",
        "[":"]"
    };
    let stuck = [];
    for(let char of s){
        if(obj[char]){
            stuck.push(obj[char]);
        } else {
            if(char === stuck[stuck.length -1]){
                stuck.pop();
            } else {
                return false;
            }
        }
    }
    return stuck.length === 0;
};