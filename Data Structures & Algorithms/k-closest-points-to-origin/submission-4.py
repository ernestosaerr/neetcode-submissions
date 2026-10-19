class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        heap = []

        for coordinates in points:
            distance = ((coordinates[0] ** 2) + (coordinates[1] ** 2)) ** 0.5
            
            heapq.heappush(heap, (-distance, coordinates))

            if len(heap) > k:
                heapq.heappop(heap)

        return [[x,y] for distance, [x,y] in heap]