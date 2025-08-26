/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let i = 0; i < 9; i++){
        let seen = new Set();
        for(let j = 0; j < 9; j++){
            if(board[i][j] === '.') continue;
            if(seen.has(board[i][j])){
                return false;
            }
            seen.add(board[i][j]);
        }
    }

    for(let i = 0; i < 9; i++){
        let seen = new Set();
        for(let j = 0; j < 9; j++){
            if(board[j][i] === '.') continue;
            if(seen.has(board[j][i])){
                return false;
            }
            seen.add(board[j][i]);
        }
    }
    for(let i = 0; i < 9; i++){
        let seen = new Set();
        for(let j = 0; j < 3; j++){
            for(let k = 0; k < 3; k++){
                let row = Math.floor(i / 3) * 3 + j;
                let col = (i % 3) * 3 + k;
                if (board[row][col] === '.') continue;
                if (seen.has(board[row][col])) return false;
                seen.add(board[row][col]);
            }
        }
    }
    return true;
};