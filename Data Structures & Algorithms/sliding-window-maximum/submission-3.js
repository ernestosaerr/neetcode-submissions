class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let left = 0;
        let dequeue = [];
        let result = [];

        for(let right = 0; right<nums.length; right++){
            while(dequeue.length && nums[dequeue[dequeue.length - 1]] <= nums[right]) dequeue.pop();
            dequeue.push(right);
            if(right - left + 1 === k) {
                result.push(nums[dequeue[0]]);
                if(dequeue[0] === left) dequeue.shift();
                left++;
            }
        }
        return result;
    }
}

// dequeue values = [4]
// [2  1 0 4]  2  6  