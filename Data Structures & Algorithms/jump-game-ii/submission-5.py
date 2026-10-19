class Solution:
    def jump(self, nums: List[int]) -> int:
        farthest = 0 
        jumps = 0
        current_end = 0


        for i in range(len(nums) - 1):
            farthest = max(farthest, i + nums[i])

            if i == current_end:
                jumps += 1
                current_end = farthest

                if current_end == len(nums) - 1:
                    return jumps
        

        return jumps 



"""
[2,4,1,1,1,1]

"""