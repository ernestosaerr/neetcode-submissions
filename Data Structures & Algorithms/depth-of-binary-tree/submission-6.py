# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        max_depth = 0
        if not root:
            return max_depth
        
        def dfs(node):
            if not node:
                return 0

            depth_left = dfs(node.left)
            depth_right = dfs(node.right)

            return 1 + max(depth_left, depth_right)

        return dfs(root)
