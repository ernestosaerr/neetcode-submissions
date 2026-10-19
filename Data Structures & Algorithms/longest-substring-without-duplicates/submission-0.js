class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let mySet = new Set ();
        let left  = 0;
        let maxLen = 0;
        for(let right = 0; right < s.length; right++) {
            while(mySet.has(s[right])) {
                mySet.delete(s[left]);
                left ++;
            }
            mySet.add(s[right]);
            maxLen = Math.max(maxLen, mySet.size);
        }
        return maxLen;
    }
}


// "zxyzxyz"
// set = { x, y, z}
// maxLen = 2


