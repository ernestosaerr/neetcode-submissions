class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        max_area = 0
        directions = [
            (-1, 0), 
            (1, 0),
            (0, -1),
            (0, 1)
        ]

        def dfs(row, col):
            if(
                row < 0 or 
                row >= rows or 
                col < 0 or 
                col >= cols or 
                grid[row][col] == 0
            ):
                return 0

            grid[row][col] = 0
            area = 1

            for dr, dc in directions:
                new_row = row + dr
                new_col = col + dc

                area += dfs(new_row, new_col)
            return area
                    

        for row in range(rows):
            for col in range(cols):
                if grid[row][col] == 1:
                    max_area = max(max_area, dfs(row, col))
        
        return max_area
        