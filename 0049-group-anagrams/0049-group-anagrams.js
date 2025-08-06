/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const obj = {};
    for(let str of strs){
        const sortedStr = str.split("").sort().join("");
        if(!obj[sortedStr]){
            obj[sortedStr] = [];
        }
        obj[sortedStr].push(str);
    }
    return Object.values(obj);
};