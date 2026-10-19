class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanString =  s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        let left = 0;
        let right = cleanString.length - 1;
        while(left < right) {
            if(cleanString[left]!== cleanString[right]) return false;
            left ++;
            right --;
        }
        return true;
    }
}
