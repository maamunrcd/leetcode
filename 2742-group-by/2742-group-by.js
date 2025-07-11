/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let result = {};
    for(let item of this){
        if(!result[fn(item)]) result[fn(item)] = [];
        result[fn(item)].push(item);
    }
    return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */