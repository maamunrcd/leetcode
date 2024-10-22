/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = "";
    let left, right = 0;
    for(left = 0, right = 0; left < word1.length && right < word2.length; left++, right++){
        result += word1[left]+word2[right];
    }
    return result + word1.slice(left) + word2.slice(right);
};