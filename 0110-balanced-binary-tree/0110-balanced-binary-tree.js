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
    if(root === null) return [true, 0];
    let left, right, balanced;
    left = dfs(root.left);
    right = dfs(root.right);
    balanced = left[0] && right[0] && (Math.abs(left[1] - right[1]) <=1);
    return [balanced, 1 + Math.max(left[1], right[1])];
}
var isBalanced = function(root) {
    return dfs(root)[0];
};