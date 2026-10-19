class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let maxLen = 0;
        let maxFreq = 0;
        let freq = {}

        for(let right = 0; right < s.length; right ++) {
            freq[s[right]] = (freq[s[right]] || 0) + 1;

            maxFreq = Math.max(maxFreq, freq[s[right]]);

            while((right - left + 1) - maxFreq > k ) {
                freq[s[left]] --;
                maxFreq = Math.max(maxFreq,freq[s[left]]);
                if(freq[s[left]] === 0) delete freq[s[left]];
                left ++;
            }
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }
}


/*
 "BABB"  k = 1

 {
    A:1
    B:2
 }

    maxFreq = math.max(maxFreq, map[key]);
 while(right - left + 1 - maxFreq > k) {
    map[a] --;
    if(map[a] === 0) delete map[a];
    left ++;
    maxFreq = math.max(maxFreq, map[key]);
 }

 maxFreq = A;

 */