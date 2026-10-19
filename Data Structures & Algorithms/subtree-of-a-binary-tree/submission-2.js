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
        function isSameTree(node, subRootNode) {
            if(!node && !subRootNode) return true;
            if(!node || !subRootNode) return false;
            if(node.val !== subRootNode.val) return false;
            return isSameTree(node.left, subRootNode.left) && isSameTree(node.right, subRootNode.right);
        }

        function dfs(node) {
            if(!node) return false;
            if (isSameTree(node, subRoot)) return true;
            return dfs(node.left, subRoot) || dfs(node.right, subRoot);
        }

        return dfs(root);
    }
}
