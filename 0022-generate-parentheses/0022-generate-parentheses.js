/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function(n) {
    var ans = [];
    addParenthesis(0, 0, n, "", ans);
    return ans;
};
function addParenthesis(startP, endP, n, str, ans){
    if((startP < endP) || (startP > n || endP > n)) return;
    if(startP == n && endP == n) {
        ans.push(str);
        return;
    }
   addParenthesis(startP + 1, endP, n, str + "(", ans);
   addParenthesis(startP, endP + 1, n, str + ")", ans);
}
