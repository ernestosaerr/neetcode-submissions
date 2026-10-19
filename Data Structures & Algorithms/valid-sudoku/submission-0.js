class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let arraySetsRows = Array.from({length:9}, () => new Set());
        let arraySetsColumns = Array.from({length:9}, () => new Set());
        let arraySetsSquares = Array.from({length:9}, () => new Set());

        for(let i = 0; i < board.length; i++){
            for(let j = 0; j< board.length; j++) {
                const visitado = board[i][j];
                if(visitado ===  '.') continue;

                let bloque = Math.floor(i/3) * 3 + Math.floor(j/3);

                if(arraySetsRows[i].has(visitado) || arraySetsColumns[j].has(visitado) || arraySetsSquares[bloque].has(visitado)) return false;

                arraySetsRows[i].add(visitado);
                arraySetsColumns[j].add(visitado);
                arraySetsSquares[bloque].add(visitado);
            }
        }
        return true;
    }
}
