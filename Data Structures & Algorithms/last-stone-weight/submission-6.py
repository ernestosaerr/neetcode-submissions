class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        
        stones_copy = [-x for x in stones]
        heapq.heapify(stones_copy)


        while len(stones_copy) > 1:
            stone_x = -heapq.heappop(stones_copy) # 6
            stone_y = -heapq.heappop(stones_copy) # 4

            if stone_x != stone_y:
                result = stone_x - stone_y
                heapq.heappush(stones_copy,-result)

        return -stones_copy[0] if stones_copy else 0
            



# [2,3,6,2,4]
# [-6, -4, -3 ,-2, -2]

# 6 , 4
