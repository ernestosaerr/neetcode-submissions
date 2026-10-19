class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let path = [];
        let result = [];
        function backtrack(index){
            result.push([...path]);
            for(let i=index; i < nums.length; i++){
                path.push(nums[i]);
                backtrack(i + 1);
                path.pop();
            }
        }
        backtrack(0);
        return result;
    }
}
