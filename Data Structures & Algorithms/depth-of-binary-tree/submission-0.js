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
     * @return {number}
     */
    maxDepth(root) {
        let maxDeep = 0;
        let count = 0;

        function dfs(node) {
            if(!node) return;

            count ++;
            maxDeep = Math.max(maxDeep, count);
            dfs(node.left);
            dfs(node.right);
            count --;
        }
        dfs(root);
        return maxDeep;
    }
}
