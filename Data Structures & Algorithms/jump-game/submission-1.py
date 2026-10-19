class Solution:
    def canJump(self, nums: List[int]) -> bool:
        
        maximum_jump = 0

        for i in range(len(nums)):
            if maximum_jump >= i:
                maximum_jump = max(maximum_jump, nums[i] +  i)
            else:
                return False
            

        return True

# [1,0,0,1,0]
     