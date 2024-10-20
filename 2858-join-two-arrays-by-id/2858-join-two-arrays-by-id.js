/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const result = {};
    const joinTwoArray = [...arr1, ...arr2];
    for(let i = 0; i < joinTwoArray.length; i++){
        if(result[joinTwoArray[i].id]){
            result[joinTwoArray[i].id] = {...result[joinTwoArray[i].id], ...joinTwoArray[i]};

        } else {
            result[joinTwoArray[i].id] = {...joinTwoArray[i]}
        }
    }
    return Object.values(result);
};