class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
            const directions = [
        [-1, 0], // up
        [1, 0], // down
        [0, -1], // left 
        [0, 1] // right
    ];
    const rows = board.length;
    const cols = board[0].length;
    let path = [];
    let result = false;
    function backtrack(row, col, index){
        if(index === word.length) {
            return true;
        }
        if(
            row < 0 ||
            row >= rows ||
            col < 0 ||
            col >= cols ||
            board[row][col] === "#" ||
            board[row][col] !== word[index]
        ) {return false;}

        const temp = board[row][col];
        board[row][col] = "#";

        for(let [dr, dc] of directions) {
            if (backtrack(row + dr, col + dc, index + 1)) {
                board[row][col] = temp;
                return true;
            }
        }

        board[row][col] = temp;
        return false;
    }

    // traverse the matrix
    for(let row = 0; row < rows; row ++) {
        for(let col = 0; col < cols; col ++){
            if(backtrack(row, col, 0)) return true;
        }
    }
    return false;
    }
}
