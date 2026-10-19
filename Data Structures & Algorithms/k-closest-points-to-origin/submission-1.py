class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        heap = []

        for x,y in points:
            distance = (x*x + y*y) ** .5
            heapq.heappush(heap, (-distance, [x,y]))

        while len(heap) > k:
            heapq.heappop(heap)

        return [[x,y] for distance, [x,y] in heap]