/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let nums1Index = nums1.reduce((acc, curr, index) => ({ ...acc, [curr]: index }), {});
    let resArray = Array.from({ length: nums1.length }, () => -1);
    
    for(let i = 0; i < nums2.length; i++){
        if(nums1Index[nums2[i]] === undefined) continue;
        
        for(let j = i + 1; j < nums2.length; j++){
            if(nums2[j] > nums2[i]){
                let id = nums1Index[nums2[i]];
                resArray[id] = nums2[j];
                break;
            }
        }
    }
    
    return resArray;
};