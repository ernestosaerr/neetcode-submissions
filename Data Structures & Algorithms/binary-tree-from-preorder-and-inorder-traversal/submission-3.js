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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    // preorder = [1,2,3,4] // mid = 1
    // inorder = [2,1,3,4]
     // left = [2] right = [3,4]

    buildTree(preorder, inorder) {
        if(preorder.length === 0 || inorder.length === 0) return null; 
        const root = new TreeNode(preorder[0]);
        const mid = inorder.indexOf(preorder[0]);

        root.left = this.buildTree(
            preorder.slice(1, mid + 1), // root
            inorder.slice(0, mid) // next range of childrens of current root
        );

        root.right = this.buildTree(
            preorder.slice(mid + 1),
            inorder.slice(mid + 1)
        );
        return root;
    }
}
