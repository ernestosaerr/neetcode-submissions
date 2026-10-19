class Solution:
    def trap(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        water = 0
        max_left = 0
        max_right = 0

        while left < right:
            max_left = max(max_left, height[left])
            max_right = max(max_right, height[right])

            if max_left < max_right:
                water += max_left - height[left]
                left += 1
            else:
                water += max_right - height[right]
                right -= 1

        return water