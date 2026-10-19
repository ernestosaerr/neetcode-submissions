class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    const map =  new Map();
    for(const elemento of strs) {
        let ordenada = elemento.split('');
        ordenada.sort();
        ordenada = ordenada.join('');
        console.log(ordenada);
        if(map.has(ordenada)) {
            map.get(ordenada).push(elemento);
        }else {
            map.set(ordenada, [elemento]);
        }
    }
    return [...map.values()];
    }
}
