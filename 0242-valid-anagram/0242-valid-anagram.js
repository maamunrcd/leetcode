/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    let sSort = s.split("").sort().join();
    let tSort = t.split("").sort().join();
    return sSort == tSort;
};