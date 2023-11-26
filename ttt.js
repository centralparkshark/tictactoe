const newButton = document.getElementById('newGame');
newButton.addEventListener('click', () => {
    playAgain();
});


//playagain, newgame
//functions only needed at the start of new game
function playAgain() {
    //player object 
    function makePlayer(name, piece, turn) {
        const player = {};
        player.name = name;
        player.piece = piece;
        player.turn = turn;
        return player;
    }

    //new gameboard 
    let board = [];
    function gameBoard() {

        //gameboard object
        // need this to exist for check win logic
        for (let i = 0; i < 3; i++){
            board[i] = [];
            for (let j = 0; j < 3; j++){
                board[i].push(' ');
            }
        };
        
        // wins and turn counter
        win = false;
        turn = 0; //number of turns

        //add listener event to each square
        const squares = document.querySelectorAll('.square');
        squares.forEach(function(square) {
            square.innerHTML = '';
            square.addEventListener('click', () => {
                while (square.innerHTML != '') {
                    alert("Spot taken");
                    return 0;
                }
                //makeMove(square, board);
                if (turn < 9 && win != true) {
                    //select player whose turn
                    if (turn % 2 === 1) {
                        //player two turn
                        makeMove(square, board, playerTwo.piece);
                    } else {
                        //player one turn
                        makeMove(square, board, playerOne.piece);
                    }
                turn++;
                }
            });
        });
    
        return board;
    }

    const popup1 = document.getElementById('popup1');
    const popup2 = document.getElementById('popup2');

    //reset board after old game
    //tba

    //display popup
    newButton.style.display = "none";
    popup1.style.display = "flex";

    let playerOne;
    let playerTwo;
    let name1;
    let name2;

    //add a way to select these pieces
    let piece1 = 'x';
    let piece2 = 'o';

    const ok1 = document.getElementById('ok1');
    ok1.addEventListener('click', () =>
    {
        name1 = document.querySelector('#name1').value;
        popup1.style.display = "none";
        popup2.style.display = "flex";
        playerOne = makePlayer(name1, piece1, true);
    });
    const ok2 = document.getElementById('ok2');
    ok2.addEventListener('click', () =>
    {
        name2 = document.querySelector('#name2').value;
        popup2.style.display = "none";
        playerTwo = makePlayer(name2, piece2, false);

        //gets rid of gray background
        const grayed = document.getElementById("grayed");
        grayed.style.backgroundColor = "rgba(61, 61, 61, 0.0)";
        grayed.style.zIndex= -1;
        
    });
    gameBoard();
    return {playerOne, playerTwo, board};
}



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

function makeMove(square, board, piece) {
    square.innerHTML = piece;
    let searchX = square.getAttribute('x');
    let searchY = square.getAttribute('y');
    board[searchX][searchY] = piece;
    checkWin(board);
    return board;
}