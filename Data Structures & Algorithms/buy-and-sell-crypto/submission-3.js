class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let left = 0;

        for(let right = 0; right < prices.length; right++){
            if(prices[right] < prices[left]) left = right;
            maxProfit = Math.max(prices[right] - prices[left], maxProfit);
        }
        return maxProfit;
    }
}



// [10,1,5,6,7,1]
//     l 
//       r