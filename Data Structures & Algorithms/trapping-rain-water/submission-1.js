class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length - 1;
        let maxLeft = 0;
        let maxRight = 0;
        let watter = 0;

        while(left < right) {
            if(height[left] < height[right]) {
                if(height[left] >= maxLeft) {
                    maxLeft = height[left];
                } else {
                    watter += maxLeft - height[left];
                }
                left ++;
                /*
                maxLeft = Math.max(height[left], maxLeft);
                watter 
                */
            }else{
                if(height[right] >= maxRight) {
                    maxRight = height[right];
                } else {
                    watter += maxRight - height[right];
                }
                right --;
            }
        }
        return watter;
    }
}
