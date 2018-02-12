var exist = function(board, word) {
    for (var row = 0; row < board.length; row++) {
        for (var col = 0; col < board[0].length; col++) {
            if (existHelper(board, word, row, col, 0)) return true;
        }
    }

    return false;
};

// if the word[k] existing in board, keep searching up, down, left, right 
var existHelper = function(board, word, row, col, idx) {
    if (idx === word.length) return true;
    if (row < 0 || col < 0 || row > board.length - 1 || col > board[0].length - 1) return false;
    if (board[row][col] === word[idx]) {
        var tmp = board[row][col];
        board[row][col] = '#';
        if(existHelper(board, word, row + 1, col, idx + 1)) return true;
        if(existHelper(board, word, row - 1, col, idx + 1)) return true;
        if(existHelper(board, word, row, col + 1, idx + 1)) return true;
        if(existHelper(board, word, row, col - 1, idx + 1)) return true;

        board[row][col] = tmp;
    }
};




function exist(board,word){





}



