/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length -1;
    let maxFrequency = -Infinity;
    while(left < right){
        let distance = right - left;
        let minContainer = Math.min(height[left], height[right]);
        maxFrequency = Math.max(maxFrequency, minContainer*distance);
        if(height[left] < height[right]){
            left++;
        } else {
            right--;
        }
    }
    return maxFrequency;
};