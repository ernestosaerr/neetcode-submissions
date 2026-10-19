class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // [1,2,4,6] prefix (izquierda a derecha )
        // [1, 1, 2, 8 ]
        let n = nums.length;
        let result = new Array(n).fill(1);

        let prefix = 1; 
        for(let i=0; i<nums.length; i++){
            result[i] = prefix;
            prefix *= nums[i];
        }
        // sufifix = (derecha -> izquierda)
        let suffix = 1;
        for(let i = n - 1; i>= 0; i--){ // // [1, 1, 2, 8 ]
            result[i] *= suffix;
            suffix *= nums[i];
        }
        return result;
    }
}
