class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let res = [];
        let path = [];

        function backtrack(index){
            if(index >= s.length) {
                res.push([...path]); // result = [[a,a,b], ]
                return;
            }

            for(let i = index; i < s.length; i++) {
                if(isPalindrome(s, index, i)) {
                    path.push(s.slice(index, i + 1)); // [a, a,]
                    backtrack(i + 1); // 0 1 
                    path.pop();
                };
            }

        }
                backtrack(0);
            return res;
        function isPalindrome(s, l, r) {
            while(l < r){
                if(s[l] !== s[r]) return false;
                l ++;
                r --;
            }
            return true;
        }
    }
}
