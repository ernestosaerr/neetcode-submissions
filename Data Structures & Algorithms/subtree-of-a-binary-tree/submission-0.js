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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function isSame(a,b) {
            if(!a && !b) return true;
            if(!a || !b) return false;
            if(a.val !== b.val) return false;
            return isSame(a.left, b.left) && isSame(a.right, b.right);
        }
        function dfs(nodeRoot, nodeSubroot) {
            if (!nodeRoot) return false;
            if(isSame(nodeRoot, nodeSubroot)) return true;
            return dfs(nodeRoot.left, nodeSubroot) || dfs(nodeRoot.right, nodeSubroot);
        }

        return dfs(root, subRoot);
    }
}
