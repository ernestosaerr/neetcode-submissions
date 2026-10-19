class Solution:
    def maxArea(self, heights: List[int]) -> int:
        

        left = 0
        right = len(heights) - 1
        area = 0
        max_area = 0

        while left  < right:
            altitude = min(heights[left], heights[right])
            distance = abs(right - left)
            area = altitude * distance
            max_area = max(max_area, area)

            if heights[left] < heights[right]:
                left += 1
            else:
                right -= 1

        return max_area