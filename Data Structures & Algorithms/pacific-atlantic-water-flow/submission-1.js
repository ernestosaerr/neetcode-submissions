class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        if(!heights || heights.length === 0) return [];
        const atlantic = new Set();
        const pacific = new Set();

        const rows = heights.length;
        const cols = heights[0].length;

        const directions = [
            [-1, 0], //up
            [1, 0], // down
            [0, -1], // left 
            [0, 1] // right
        ];

        function dfs(row, col, visited, prevHeight) {
            if(
                row < 0 ||
                row >= rows ||
                col < 0 ||
                col >= cols ||
                visited.has(`${row},${col}`) ||
                heights[row][col] < prevHeight
            ) {return;}
            const key = `${row},${col}`;
            visited.add(key);
            for(let [dr, dc] of directions) {
                dfs(row + dr, col + dc, visited, heights[row][col]);
            }
        }

        // pacific
        for(let row = 0; row < rows; row++) {
            dfs(row, 0, pacific, -Infinity);
        }
        for(let col = 0; col < cols; col++) {
            dfs(0, col, pacific, -Infinity);
        }


        // atlantic
        for(let row = rows - 1; row >= 0; row--) {
            dfs(row, cols - 1, atlantic, -Infinity);
        }
        for(let col = cols - 1; col >= 0; col --) {
            dfs(rows - 1, col, atlantic, -Infinity);
        }
        let result = [];
        for(let row = 0; row < rows; row ++){
            for(let col = 0; col < cols; col ++) {
                const key = (`${row},${col}`);
                if(atlantic.has(key) && pacific.has(key)) {
                    result.push([row,col]);
                }
            }
        }
        return result;
    }
}
