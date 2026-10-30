class Solution:
    def rob(self, nums: List[int]) -> int:
        
        n = len(nums)

        if n == 0:
            return 0

        dp = [0] * (n + 1)
        dp[1] = nums[0]

        for i in range(2, n + 1):
            skip = dp[i - 1]
            robbing = nums[i - 1] + dp[i - 2]
            dp[i] = max(skip, robbing)

        return  dp[n]


# [2,9,8,3,6]
# [0,2,0,0,0,0]