class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = [];
        let path = [];

        function backtrack(){
            if(path.length === nums.length) {
                result.push([...path]);
                return;
            }
            for(let x of nums){
                if(!path.includes(x)) {
                    path.push(x);
                    backtrack();
                    path.pop();
                }
            }
        }
        backtrack();
        return result;
    }
}
