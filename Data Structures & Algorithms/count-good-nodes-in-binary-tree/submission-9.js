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
    goodNodes(root) {
        let maxVal = 0;
        let count = 0;

        function dfs(node, maxVal) {
            if (!node) return;
            if(node.val >= maxVal) count ++;

            let newMax = Math.max(maxVal, node.val);
            dfs(node.left, newMax);
            dfs(node.right, newMax);
        }
        dfs(root, root.val);
        return count;
    }
}
