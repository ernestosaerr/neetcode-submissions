/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) { // p = 1, q = 4
        function dfs(node){
            if(!node) return null;
            if(node.val === p.val || node.val === q.val) return node;
            let left = dfs(node.left);
            let right = dfs(node.right);
            if(left && right) return node;
            return left || right;
        }
        return dfs(root);
    }
}
