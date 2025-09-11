/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxFreq = 0;
    let left = 0;
    let right = height.length -1;
    while(left < right){
        let minValue = Math.min(height[left], height[right]);
        maxFreq = Math.max(maxFreq, ((right - left) * minValue));
        if(height[left] < height[right]){
            left++;
        } else {
            right --;
        }
    }
    return maxFreq;
};