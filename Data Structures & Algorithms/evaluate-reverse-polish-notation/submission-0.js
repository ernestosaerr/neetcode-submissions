class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        const obj = {
            '+' : (a,b) => a + b,
            '-' : (a,b) => a - b,
            '*' : (a,b) => a * b,
            '/' : (a,b) => Math.trunc(a/b)
        }
        for (const token of tokens){
            if(obj[token]) {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(obj[token](a,b));
            }else {
                stack.push(+token);
            }
        }
        return stack.pop();
    }
}
