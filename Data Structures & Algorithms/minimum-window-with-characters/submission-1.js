class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let visited = {};
        let answer = "";
        let minLen = Infinity;
        let left = 0;

        for(let char of t) {
            visited[char] = (visited[char] || 0 ) + 1;
        }
        for(let right = 0; right < s.length; right++){
            if(s[right] in visited) visited[s[right]] --; 

            while(isValid(visited)) {
                if(right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    answer = s.slice(left, right + 1);
                }

                if(s[left] in visited) visited[s[left]] ++;
                left ++;
            }
        }

        return answer;

        function isValid(visited){
            for(let char in visited){
                if(visited[char] > 0) return false;
            }
            return true;
        }

    }
}
