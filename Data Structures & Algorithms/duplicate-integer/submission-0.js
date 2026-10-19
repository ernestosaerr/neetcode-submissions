class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let duplicados = new Set();
        for(const num of nums){
            if(duplicados.has(num)){
                return true;
            }
            duplicados.add(num);
        }
        return false;
    }
}
