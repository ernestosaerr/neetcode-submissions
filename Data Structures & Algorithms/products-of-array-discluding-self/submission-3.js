class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // Input: nums = [1,2,4,6]
        // Output: [48,24,12,8]
        let finalResult =  [];
        let currentResult;
        for(let i = 0; i< nums.length; i++) {
            currentResult = 1;
            for(let j=0; j<nums.length; j++){
                if(j === i){
                    continue;
                }
                currentResult *= nums[j];
            }
            finalResult.push(currentResult);
        }
        return finalResult;
    }
}
