class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a,b) => a - b);
        let path = [];
        let result = [];
        function backtrack(index){
            result.push([...path]);
            for(let i = index; i < nums.length; i++){
                if(i > index && nums[i] === nums[i - 1]) continue;
                path.push(nums[i]);
                backtrack(i + 1);
                path.pop();
            }
        }
        backtrack(0);
        return result;
    }
}
