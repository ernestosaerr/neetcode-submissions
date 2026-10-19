class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b);
    let indexes = [];  
    for(let fixed = 0; fixed < nums.length; fixed ++) {
        if (fixed > 0 && nums[fixed] === nums[fixed - 1]) continue;
        let left = fixed + 1;
        let right = nums.length - 1;
        while(left < right) {
            if((nums[fixed] + nums[left] + nums[right]) === 0) {
                indexes.push([nums[fixed], nums[left], nums[right]]);
                while(left < right && nums[left] === nums[left + 1]) left ++;
                while(left < right && nums[right] === nums[right - 1]) right --;
                left ++; 
                right --;
                //skip duplicates

            } 
            if((nums[fixed] + nums[left] + nums[right]) < 0) {
                left++;
                continue;
            } 
            if((nums[fixed] + nums[left] + nums[right]) > 0){
                right --;
                continue;
            }
        }
    }
    return indexes;
    }
}
