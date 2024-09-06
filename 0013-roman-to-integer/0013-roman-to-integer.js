/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let symbleObj = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let total = 0;
    let first = 0;
    let last = first+1;
    for(let i = 0; i < s.length; i++){
        let j = i + 1;
        if(symbleObj[s[i]] < symbleObj[s[j]]){
            total +=  symbleObj[s[j]] - symbleObj[s[i]];
            i++;
        } else {
            total +=  symbleObj[s[i]];
        }

    }
    return total;
};