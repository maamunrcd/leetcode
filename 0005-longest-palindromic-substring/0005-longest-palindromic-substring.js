/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = "";
    let resLen = 0;
    for(let i = 0; i < s.length; i++){
        for(let j = i; j < s.length; j++){
            let l = i;
            let r = j;
            while(l < r && s[l] === s[r]){
                l++;
                r--;
            }
            if (l >= r && resLen < j - i + 1) {
                res = s.slice(i, j + 1);
                resLen = j - i + 1;
            }
        }
    }
    return res;
};