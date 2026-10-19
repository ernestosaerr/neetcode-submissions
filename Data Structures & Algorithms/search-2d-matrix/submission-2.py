class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        left = 0
        rows = len(matrix)
        cols = len (matrix[0])
        right = rows * cols  - 1

        while left <= right:
            mid = math.floor((left + right) / 2)
            row = mid // cols
            col = mid % cols
            value = matrix[row][col]
            if value == target:
                return True
            elif value < target:
                left += 1
            elif value > target:
                right -= 1
    

        return False
        