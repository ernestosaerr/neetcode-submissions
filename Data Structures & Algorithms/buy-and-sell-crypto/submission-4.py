class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maximum_gain = 0
        slow = 0
        fast = 1
        n = len(prices)
        while slow < n  and fast < n:
            maximum_gain = max(maximum_gain, prices[fast] - prices[slow])
            if prices[fast] < prices[slow]:
                slow = fast
        
            fast += 1

        return maximum_gain


"""
[10,1,5,6,7,1]
  s
    f
"""