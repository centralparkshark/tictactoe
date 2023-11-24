//gameboard object
function gameBoard(board) {
    const blankBoard = (function(board) {
        for (let i = 0; i < 3; i++){
            board[i] = [];
            for (let j = 0; j < 3; j++){
                board[i].push(' ');
            }
        }
    });
    blankBoard(board);
    return board;
};

//player object
function makePlayer(name, piece, turn) {
    const player = {};
    player.name = name;
    player.piece = piece;
    player.turn = turn;
    return player;
};

function checkWin(board) {
    //check verticals
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
    //check horizontals 
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
    //check diagnols
        if (board[0][0] === board[1][1]) {
            if (board[0][0] === ' ' || board[1][1] === ' ') {
                //do nothing 
            } else {
                if (board[0][0] === board[2][2]) {
                    win = true;
                    return win;
                }
            }
        } else if (board[0][2] === board[1][1]) {
            if (board[0][2] === ' ' || board[1][1] === ' ') {
                //do nothing 
            } else {
                if (board[0][2] === board[2][0]) {
                    win = true;
                    return win;
                }
            }
        }
};

function makeMove(board, piece) {
    let x = prompt("X: ");
    let y = prompt("Y: ");
    if (board[x][y] === ' ') {
        board[x][y] = piece;
        console.log(board);
    } else {
        console.log("Spot taken");
    }
    checkWin(board);
    return board;
}

//game object
function newGame(piece1, piece2) {
    //set up
    const board = [];
    const playerOne = makePlayer(1, piece1, true);
    const playerTwo = makePlayer(2, piece2, false);

    gameBoard(board);
    console.log(board);

    win = false;
    i = 0; //number of turns
    while (i < 9 && win != true) {
        //player turn
            // // [down][right] //testing console 
            // board[0][2] = 'x';
            // board[2][0] = 'x';
            // board[1][1] = 'x';
        //select player whose turn
        if (i % 2 === 1) {
            //player two turn
            makeMove(board, playerTwo.piece);
        } else {
            //player one turn
            makeMove(board, playerOne.piece);
        }
        checkWin(board);
        i++; // signifies turn was taken
        //change players turn
        console.log(board);
        console.log(win);
    }
    //console.log('game over');
    return board;
};
