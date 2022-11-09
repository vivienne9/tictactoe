const cells = document.querySelectorAll('.cell');
const getBoard = document.getElementsByClassName('board');
const resetButton = document.getElementById('reset-game');

const endGame = document.getElementById('endGame');
const endGameText = document.getElementById('win').innerHTML
const startButton = document.getElementById('startButton');

let gameState = {
    players: ['x','o'],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }

//Randomly select first player
let player = gameState.players;
let i = Math.floor(Math.random() * player.length);
let turn = gameState.players[i]; 

for(let i = 0; i < cells.length; i++){

    cells[i].addEventListener('click', function(event){
        target = event.target;
        if(turn === 'x'){
            target.innerText = 'x';
            turn = 'o';    
        }
        else if (turn === 'o'){
            target.innerText = 'o';
            turn = 'x';  
        }
        return turn;
    }) 
    continue;    
}


// function win (gameState){
    // for(let i = 0; i < board.length; i++){
    //     let row = board[i];
    //     for (let j = 0; j < board[i].length; j++){
    //         if(board[i][j] = board[i][j+1]= board[i][j+2]=
    //     }

    // }

// }

// function playerWon(){
//     // logic for which player won
//     endGame.classList = 'show';
// }

