class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
            let left = 0;
    let right = 0;
    let diff = 0;


    for(let right = 0; right < prices.length; right++) {
        if(right !== left) {
            diff = Math.max(diff, prices[right] - prices[left]);
        }
        if(prices[right] < prices[left]) {
            left = right;
        }
    }

    return diff;
    }
}
