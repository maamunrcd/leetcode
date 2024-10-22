/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = "";
    let left = 0;
    let right = 0;
    while(left < word1.length && right < word2.length){
        result = result + word1[left]+word2[right];
        left++;
        right++;
    }
    while(left < word1.length){
        result += word1[left];
        left++;
    }
    while(right < word2.length){
        result += word2[right];
        right++;
    }
    return result;
};