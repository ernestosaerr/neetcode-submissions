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
    lowestCommonAncestor(root, p, q) { // p = 3, q = 4
        while(root) {
            if(p.val < root.val && q.val < root.val){
                root = root.left;
            } else if(q.val > root.val && p.val > root.val){
                root = root.right;
            } else{
                return root;
            }
        }
    }
}
