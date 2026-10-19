class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:    
        left = 1
        right = max(piles)

        def can(x):
            hours = 0
            for bananas in piles:
                hours += math.ceil(bananas/x)
            return hours <= h

        while left <= right:
            mid = (left + right) // 2

            if can(mid):
                right = mid - 1
            else:
                left = mid + 1
                

        return left 

        


"""
       r
l
   m
[1....4]
"""