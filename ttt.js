function gameBoard() {
    const board = [];
    blankBoard(board);
    win = false;
    i = 0; //number of turns
    while (i < 9 && win != true) {
        //player 1 turn
        //player 2 turn
        checkWin(board);
        i++; // signifies turn was taken
    }
    console.log('game over');
};

function blankBoard(board) {
    for (let i = 0; i < 3; i++){
        board[i] = [];
        for (let j = 0; j < 3; j++){
            board[i].push(' ');
        }
    }
    board[0][1] = 'x';
    board[2][1] = 'x';
    board[1][1] = 'x';
    console.log(board);
    return board;
}


const playerOne = {};
const playerTwo = {};


function vert(board) {
    for (let i = 0; i < 3; i++){
        if (board[i][0] === board[i][1]) {
            if (board[i][0] === ' ' || board[i][1] === ' ') {
                //do nothing
            } else {
                if (board[i][1] === board[i][2]) {
                    win = true;
                    return win;
                }
            }
        }
    }
}

function horz(board) {
    for (let i = 0; i < 3; i++){
        if (board[0][i] === board[1][i]) {
            if (board[0][i] === ' ' || board[1][i] === ' ') {
                //do nothing
            } else {
                if (board[1][i] === board[2][i]) {
                    win = true;
                    return win;
                }
            }
        }
    }
}

function diag(board) {

}

function checkWin(board) {
    // [down][right] //testing console 
    // board[0][1] = 'x';
    // board[2][1] = 'x';
    // board[1][1] = 'x';

    //check verticals
    vert(board);
    //check horizontals
    horz(board);
    //check diagnols
    diag(board);

}

function makeMove(board, x, y) {
    if (board[x][y] != ' ') {
        board[x][y] = 'x';
    }
    checkWin(board);
}


