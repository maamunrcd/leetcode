/**
 * @param {string} s
 * @return {number}
 */

//Brute Force Approach n3
// var lengthOfLongestSubstring = function(s) {
//     let maxLength = 0;
//     for(let i = 0; i < s.length; i++){
//         let seen = new Set();
//         for(let j = i; j < s.length; j++){
//             if(seen.has(s[j])){
//                 break;
//             }
//             seen.add(s[j]);
//             maxLength = Math.max(maxLength, j - i + 1);
//         }
//     }
//     return maxLength;
// };

// Optimal Appraoch 1 - 2n
// var lengthOfLongestSubstring = function(s){
//     let left = 0;
//     let maxLength = 0;
//     let seen = new Set();
//     for(let right = 0; right < s.length; right++){
//         while(seen.has(s[right])){
//             seen.delete(s[left]);
//             left++;
//         }
//         seen.add(s[right]);
//         maxLength = Math.max(maxLength, right-left+1);
//     }
//     return maxLength;
// }

// Optimal Appraoch 1 - 2n
var lengthOfLongestSubstring = function(s){
    let left = 0;
    let maxLength = 0;
    let map = new Map();
    for(let right = 0; right < s.length; right++){
        if(map.has(s[right]) && map.get(s[right]) >= left ){
            left = map.get(s[right]) + 1;
        }
        map.set(s[right], right);
        maxLength = Math.max(maxLength, right-left+1);
    }
    return maxLength;
}