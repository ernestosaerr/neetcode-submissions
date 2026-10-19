class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left = 0
        right = len(numbers) - 1
        result = []

        while left < right:
            sum = numbers[left] + numbers[right]
            if sum == target:
                result.extend([left + 1, right + 1])
                return result
            elif sum < target:
                left += 1
            elif sum > target:
                right -= 1
        return result