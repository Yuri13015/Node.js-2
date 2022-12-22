const cells = document.querySelectorAll('[data-cell]');
const gameStatus = document.getElementById('gameStatus');
const endGameStatus = document.getElementById('endGameStatus');
const playerOne = 'X'; const playerTwo = 'O';
let playerTurn = playerOne;

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

cells.forEach(cell => {
  cell.addEventListener('click', playGame, { once: true });
});

function playGame(e) {
  e.target.innerHTML = playerTurn;

  if (checkWin(playerTurn)) {
    updateGameStatus("wins" + playerTurn);
    return endGame();
  } else if (checkDraw()) {
    updateGameStatus("draw");
    return endGame();
  }

  updateGameStatus(playerTurn);
  playerTurn == playerOne ? playerTurn = playerTwo : playerTurn = playerOne;
}

