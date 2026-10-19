class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
    const map = {')': '(', '}':'{', ']':'['};
    let stack = [];
    for(const char of s){
        if(char === ')' || char === '}' || char === ']') {
            if(stack.pop() === map[char]){
                continue;
            }else {
                return false;
            }
        }else {
            stack.push(char);
        }
    }
    if (stack.length === 0) return true;
    return false;
    }
}
