class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
            let path = [];
    let result = [];
    let close = 0;
    let open = 0;
    
    function backtrack(open, close){
        if(path.length === n * 2) {
            result.push(path.join(""));
            return;
        }
        if(open < n) {
            path.push("(");
            backtrack(open + 1, close);
            path.pop();
        }

        if(close < open) {
            path.push(")");
            backtrack(open, close + 1);
            path.pop();
        }
    }
    backtrack(0,0);
    return result;
    }
}
