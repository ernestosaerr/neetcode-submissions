class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let result = [];
        let left = 0;

        for (let right = 0; right < nums.length; right++) {
            if (right - left + 1 === k) {
                let currentMax = Math.max(...nums.slice(left, right + 1));
                result.push(currentMax);
                left++;
            }
        }

        return result;
    }
}