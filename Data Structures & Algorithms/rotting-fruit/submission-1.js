class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
            let rows = grid.length;
    let cols = grid[0].length;
    let queue = [];
    let fresh = 0;
    const directions = [
        [-1, 0],//up
        [1, 0], //down
        [0, -1], //left
        [0, 1] // right
    ];

    // detectar frutas frescas y podridas
    for(let row = 0; row < rows; row ++){
        for(let col = 0; col < cols; col++){
            if(grid[row][col] === 1) fresh ++;
            if(grid[row][col] === 2) queue.push([row, col]);
        }
    }


    let minutes=0;
    while(queue.length > 0 && fresh > 0){
        let levelSize = queue.length;
        for(let i = 0; i < levelSize; i++){
            const [row, col] = queue.shift();
            for(let [dr, dc] of directions){
                const newRow = row + dr;
                const newCol = col + dc;
                if(
                    newRow < 0 ||
                    newRow >= rows ||
                    newCol < 0 ||
                    newCol >= cols ||
                    grid[newRow][newCol] !== 1
                ){continue;}
                console.log(`se van a pudrid [${newRow},${newCol}]`);
                if(grid[newRow][newCol] === 1) fresh --;
                grid[newRow][newCol] = 2;
                queue.push([newRow, newCol]);
            }
        }
        minutes ++;
    }

    return fresh === 0 ? minutes: -1;
    }
}
