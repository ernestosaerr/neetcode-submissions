class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heap = []

        for number in nums:
            heapq.heappush(heap, -number)

        for i in range(k):
            element = heapq.heappop(heap)

        return -element