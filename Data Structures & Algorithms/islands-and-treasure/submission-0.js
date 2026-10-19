class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
            let rows = grid.length;
    let cols = grid[0].length;
    let queue = [];

    const directions = [
        [-1, 0], //up
        [1, 0], //down
        [0, -1], //left
        [0, 1] // right
    ];

    // traverse graph
    for(let row = 0; row < rows; row ++){
        for(let col = 0; col < cols; col++){
            if(grid[row][col] === 0) queue.push([row, col, 0]);
        }
    } 
    while(queue.length > 0) {
        let levelSize = queue.length;
        for(let i = 0; i < levelSize; i++) {
            let [row, col, distance] = queue.shift();
            console.log(`[${row}, ${col}, ${distance}]`);
            grid[row][col] = distance;

            for(let [dr, dc] of directions) {
                const newRow = row + dr;
                const newCol = col + dc;
                if(
                    newRow < 0 ||
                    newRow >= rows ||
                    newCol < 0 ||
                    newCol >= cols ||
                    grid[newRow][newCol] !== 2147483647 
                ){continue};


                queue.push([newRow, newCol, distance + 1]); 
                grid[newRow][newCol] = distance + 1;
            }
        }
    }

    return grid;
    }
}
