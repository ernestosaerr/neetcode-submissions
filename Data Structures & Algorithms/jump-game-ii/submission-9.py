class Solution:
    def jump(self, nums: List[int]) -> int:
        
        current_end = 0
        count_steps = 0
        max_jump = 0

        for i in range(len(nums) - 1): 
            max_jump = max(max_jump, i + nums[i])

            if i == current_end:
                count_steps += 1
                current_end = max_jump


        return count_steps 



# [2,4,1,1,1,1]
#            i
#            m