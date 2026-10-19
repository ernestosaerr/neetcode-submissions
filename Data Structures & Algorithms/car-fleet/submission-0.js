class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
            let positionTime = [];
    let stack = [];
    for(let i = 0; i < position.length; i++){
        let velocidad = (target - position[i]) / speed[i];
        positionTime.push([position[i],velocidad]);
    }
    positionTime.sort((a,b) => b[0]- a[0]);
    for(let j = 0; j < positionTime.length; j++){

        if(stack.length >0 && stack[stack.length - 1][1] >= positionTime[j][1]){
            continue;
        }else {
            stack.push(positionTime[j]);
        }
    }
    return stack.length;
    }
}
