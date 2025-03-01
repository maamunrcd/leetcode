/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const obj = {
    "(": ")",
    "{": "}",
    "[": "]"
    }
    let stuck = [];
    for(let i of s){
        if(obj[i]){
          stuck.push(obj[i]);
        } else {
            if(i === stuck[stuck.length -1]){
                stuck.pop();
            } else {
                return false;
            }
        }
    }
    return stuck.length === 0;
};

