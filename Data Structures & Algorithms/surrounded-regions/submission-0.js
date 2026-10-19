class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
            let rows = board.length;
    let cols = board[0].length;
    const directions = [
        [-1, 0], //up
        [1, 0], //down
        [0, -1], //left
        [0, 1] // up
    ];

    function dfs(row, col) {
        if(
            row < 0 ||
            row >= rows ||
            col < 0||
            col >= cols ||  
            board[row][col] !== "O"
        ){return;}

        board[row][col] = "#";

        for(let [dr, dc] of directions) {
            dfs(row + dr, col + dc);
        }
    }
    for(let col = 0; col < cols; col++){
        dfs(0, col);
        dfs(rows -1, col);
    }

    for(let row = 0; row < rows; row ++){
        dfs(row, 0);
        dfs(row, cols -1);
    }


    for(let row = 0; row < rows; row ++) {
        for(let col = 0; col < cols; col++) {
            if(board[row][col] === "#") {
                board[row][col] = "O";
            }else if(board[row][col] === "O"){
                board[row][col] = "X";
            }
        }
    }

    return board;
    }
}