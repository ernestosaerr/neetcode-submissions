class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        visited = dict()
        for i  in range(len(nums)):
            missing = target - nums[i]

            if missing in visited:
                return [visited[missing], i];

            visited[nums[i]] = i


        


"""
[3,4,5,6]

dict = {

}
"""