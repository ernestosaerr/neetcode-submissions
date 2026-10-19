class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length;
        while(left <= right) {
            let mid = Math.floor((left + right)/2);
            if(nums[mid] === target) {
                return mid;
            } else if(nums[mid] > target) {
                right --;
            } else  {
                left ++;
            }
        }
            return -1;
    }
}
 
//             r
//  l
// [-1,0,2,4,6,8]
//