/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let sortArray = nums.sort((a, b) => a - b);
    let result = [];
    for(let i = 0; i < sortArray.length; i++){
        let j = i + 1;
        while(j < sortArray.length){
            let left = j + 1;
            let right = sortArray.length - 1;
            while(left < right){
                let sum = sortArray[i] + sortArray[j] + sortArray[left] + sortArray[right];
                if(sum === target){
                    result.push([sortArray[i], sortArray[j], sortArray[left], sortArray[right]]);
                    while(sortArray[left] === sortArray[left+1] && left < right){
                        left++;
                    }
                    left++;
                } else if(sum > target){
                    right--;
                } else {
                    left++;
                }
            }
            while(sortArray[j] === sortArray[j+1]){
                j++;
            }
            j++;
        }
        while(sortArray[i] === sortArray[i+1] && i < sortArray.length){
            i++;
        }
    }
    return result;
};