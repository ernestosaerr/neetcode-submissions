class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    if(s.length !== t.length) return false;
    let guardar = new Map();
    for (const char of s) {
        guardar.set(char, (guardar.get(char)|| 0) + 1);
    }
    for(const char of t) {
        if(!guardar.has(char)) return false;
        guardar.set(char, guardar.get(char) - 1);
        if(guardar.get(char) === 0) {
            guardar.delete(char);
        }
    }
    if(guardar.size === 0) return true;
    }
}
