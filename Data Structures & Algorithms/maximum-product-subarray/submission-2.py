class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        
        result = nums[0]
        max_product = nums[0]
        min_product = nums[0]

        for i in range(1, len(nums)):

            x = nums[i]

            prev_max = max_product
            prev_min = min_product

            max_product = max(x, x * prev_max, x * prev_min)
            min_product = min(x, x * prev_max, x * prev_min)

            result = max(result, max_product)

        return result