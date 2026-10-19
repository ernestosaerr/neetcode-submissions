class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
            const map = new Map();
    let maxkeys =  [];
    for (const element of nums){
        if(map.has(element)){
            map.set(element, map.get(element) +1);
        }else {
            map.set(element, 1);
        }
    }
    while(k>0){
        let maxValue = -Infinity;
        let maxkey =  null;
        for(const key of map.keys()){
            if (map.get(key)>maxValue){
                maxValue = map.get(key);
                maxkey =  key;
            }
        }
        maxkeys.push(maxkey);
        map.delete(maxkey);
        k--;
    }
    return maxkeys;
    }
}
