class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
            let left = 0;
    let right = heights.length - 1;
    let area = 0;
    let maxArea = -Infinity;
    while(left < right) {
        area = (right - left) * Math.min(heights[right], heights[left]);
        maxArea = Math.max(area, maxArea);
        if(heights[left] < heights[right]){
            left++;
        }else {
            right--;
        }
    }
    return maxArea;
    }
}
