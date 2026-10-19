class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;
        let count = 0;
        function dfs(grid, r, c){
            if(
                r < 0 ||
                c < 0 ||
                r >= grid.length ||
                c >= grid[0].length ||
                grid [r][c] === 0
            ){
                return;
            }
            count ++;
            grid[r][c] = 0;

            dfs(grid, r - 1, c);
            dfs(grid, r + 1, c);
            dfs(grid, r, c - 1);
            dfs(grid, r, c + 1);
        }

        for(let r = 0; r < grid.length; r++) {
            for(let c = 0; c < grid[0].length; c++) {
                if(grid[r][c] === 1) {
                    count = 0;
                    dfs(grid, r, c);
                    maxArea = Math.max(count, maxArea);
                }
            }
        }
        return maxArea;
    }
}
