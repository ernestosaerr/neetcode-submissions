class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = new Array(temperatures.length).fill(0);
        let stack =  [];
        for (let i=0; i<temperatures.length; i++){
            while(stack.length > 0 && temperatures[i]>temperatures[stack[stack.length-1]]){
                let days = i - stack[stack.length - 1];
                let index = stack.pop();
                result[index] = days;
            }
            stack.push(i);
        }
        return result;
    }
}
