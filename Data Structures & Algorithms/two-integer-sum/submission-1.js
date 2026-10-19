class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let complement = 0;
        const map = new Map();
        for(let i = 0; i<nums.length; i++){
            complement = target - nums[i]; // 7 - 3 = 4
            if(map.has(complement)) return [map.get(complement), i];
            map.set(nums[i], i);
        }
    }
}
