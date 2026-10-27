class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        dist = [[float("inf")] * cols for _ in range(rows)]
        heap = [(grid[0][0], 0 ,0)]
        dist[0][0] = grid[0][0]
        directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        while heap:
            time, row, col = heapq.heappop(heap)

            if time > dist[row][col]:
                continue

            if row == rows - 1 and col == cols - 1:
                return time


            for dr, dc in directions:
                nr = dr + row
                nc = dc + col


                if(
                    nr < 0  or
                    nr >= rows or
                    nc < 0 or 
                    nc >= cols
                ):
                    continue

                new_time = max(time, grid[nr][nc])
                
                if new_time < dist[nr][nc]:
                    dist[nr][nc] = new_time

                    heapq.heappush(heap, (new_time, nr, nc))
