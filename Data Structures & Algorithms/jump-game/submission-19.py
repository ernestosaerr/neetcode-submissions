class Solution:
    def canJump(self, nums: List[int]) -> bool:
        
        max_jump = 0
        current_end = 0
        for i in range(len(nums) - 1):
            
            if i > max_jump:
                return False
                
            max_jump = max(max_jump, i + nums[i])
            
            if i == current_end:
                current_end = max_jump


        return max_jump >= len(nums) - 1