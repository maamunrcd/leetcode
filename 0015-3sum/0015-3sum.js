/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let sortArray = nums.sort((a,b) => a - b);
    let result = [];
    for(let i = 0; i < sortArray.length; i++){
        let left = i + 1;
        let right = sortArray.length - 1;
        while(left < right){
            if(sortArray[left] + sortArray[right] + sortArray[i] === 0){
                result.push([sortArray[i], sortArray[left], sortArray[right]]);
                while(sortArray[left] === sortArray[left+1] && left < right){
                    left++;
                }
                left++;
            } else if(sortArray[left] + sortArray[right] + sortArray[i] < 0){
                left++;
            } else {
                right--;
            }
        }
        while(sortArray[i] === sortArray[i+1] && i < sortArray.length){
            i++;
        }
    }
    return result;
};


