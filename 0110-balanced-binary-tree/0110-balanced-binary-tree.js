/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
**/
var dfs = function(root){
    if(root === null) return 0;
    let left, right;
    left = dfs(root.left);
    right = dfs(root.right);
    if(left == -1 || right == -1) return -1;
    if(Math.abs(left - right) > 1 ) return -1;
    return 1 + Math.max(left, right); 
}
var isBalanced = function(root) {
    return dfs(root) !== -1;
};