class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let path = [];
        let result = [];
        let sum = 0;

        function backtrack(index, sum){
            if(sum === target) {
                result.push([...path]);
                return;
            }
            if(sum > target) return;
            for(let i = index; i < nums.length; i++){
                path.push(nums[i]);
                backtrack(i, sum + nums[i]);
                path.pop();
            }
        }
        backtrack(0, sum);
        return result;
    }
}
