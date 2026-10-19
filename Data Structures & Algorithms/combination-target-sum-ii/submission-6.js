class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let sum = 0;
        let path = [];
        let result = [];
        candidates.sort((a, b) => a - b);

        function backtrack(index, sum) {
            if(sum === target) {
                result.push([...path]);
                return;
            }
            if (sum > target) return;
            for(let i = index; i < candidates.length;  i++){
                if(i > index && candidates[i] === candidates[i-1]) continue;
                path.push(candidates[i]);
                backtrack(i + 1, sum + candidates[i]);
                path.pop()
            }
        }
        backtrack(0, sum);
        return result;
    }
}


// [9,2,2,4,6,1,5]
// 2, 2, 5
// [2,2,4]