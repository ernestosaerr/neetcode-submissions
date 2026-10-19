class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = '';
        for(const str of strs){
            result += str.length + '#' + str;
        }
        return result;
        //output =  4#neet4#code4#love3#you
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        //input = 4#neet4#code4#love3#you
        //output = ["neet","code","love","you"]
        let result = [];
        let i = 0;
        while(i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j ++;
            } 
            const length = parseInt(str.slice(i,j));
            const word = str.slice(j+1, j+1 + length);
            result.push(word);
            i =  j+1 + length;
        }
        return result;
    }

}
