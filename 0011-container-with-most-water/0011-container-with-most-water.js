/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left, right, maxFriquency;
    left = 0;
    right = height.length - 1;
    maxFriquency = -Infinity;
    while(left < right){
        let distance = right - left;
        let minContainer = Math.min(height[left], height[right]);
        maxFriquency = Math.max(maxFriquency, minContainer*distance);
        if(height[left] < height[right]){
            left++
        } else {
            right--;
        }
    }
    return maxFriquency;

};