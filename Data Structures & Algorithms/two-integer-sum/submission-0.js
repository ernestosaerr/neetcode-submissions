class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) { // [3,4,5,6], 7
        const map = new Map(); 
        let complement = 0;
        for(let i = 0; i<nums.length; i++){
            complement = target - nums[i]; // complement = 7 - 3 = 5 
            if(map.has(complement)) return [map.get(complement), i];
            map.set(nums[i], i);
        }
    }
}



