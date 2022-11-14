//DOM 
//Initial state
//Function to select first player
//Function to select cell
//Function to check winning condition
//Function to display winning text
//Function to Reset board

const cells = document.querySelectorAll('.cell');
//const getBoard = document.getElementById('boardId');
const resetButton = document.getElementById('reset-game');
const endGame = document.getElementById('endGame');
const endGameText = document.getElementById('win').innerText

//Initial state
let players = ['x','o'];
let board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
let turn = '';

//Randomly select first player
function selectPlayer (){
    let i = Math.floor(Math.random() * players.length);
    turn = players[i]; 
    console.log(turn);
    return turn;
}
selectPlayer();

//Select cell DOM
for(let i = 0; i < cells.length; i++){
    cells[i].addEventListener('click', selectCell);
    cells[i].addEventListener('click', checkWon);
}
    
//Select cell function
function selectCell (event){
    let target = event.target;
    let getId =  target.dataset.id;
    let getIdx = Math.floor(getId / 3);
    let getIdy = getId % 3;

    if(target.innerText != ''){
        return;
    }
    if(turn === 'x'){
        target.innerText = 'x';
        console.log(getIdx, getIdy);
        board[getIdx][getIdy] = 'x';
        console.log(board);
        turn = 'o';    
    }
    else if (turn === 'o'){
        target.innerText = 'o';
        console.log(getIdx, getIdy);
        board[getIdx][getIdy] = 'o';
        console.log(board);
        turn = 'x'; 
    } 
    return turn, board;
}

let hasWon = false;

//Check winning condition
function checkWon (){
        for(let i = 0; i < 3; i++){
            if((board[i][0] === board[i][1]) && (board[i][0] === board[i][2]) && (board[i][0] !== '')){
                hasWon = true;
                //console.log(hasWon, 'this is first check');
                playerWon();
                break;
                }
                if((board[0][i] === board[1][i]) && (board[0][i] === board[2][i]) && (board[0][i] !== '')){
                hasWon = true;
                //console.log(hasWon, 'this is second check');
                playerWon();
                break;
            }
        }
        if(board[1][1]!==''){
            if (((board[0][0] === board[1][1]) && ( board[1][1] === board[2][2]))
            || ((board[0][2] === board[1][1]) && (board[1][1] === board[2][0]))){
                hasWon = true;
                //console.log(hasWon, 'this is third check');
                playerWon();
            }
        }
    return hasWon;
}        

//Display player won text
function playerWon (){
    if(hasWon){
        endGame.className = 'show';
    }
}

//Clear player won text
function clearWon (){
    endGame.className = 'hide';
}
   
// Reset DOM
resetButton.addEventListener('click',function(event){
    for (let i=0; i<board.length; i++){
        for(let j=0; j<board.length; j++){
            board[i][j] = '';
        }
        //console.log(board);
    }

    for(let i = 0; i < cells.length; i++){
        cells[i].innerText ='';

    }  
    clearWon();
})
        


