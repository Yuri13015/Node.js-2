const cells = document.querySelectorAll('[data-cell]');
const gameStatus = document.getElementById('gameStatus');
const endGameStatus = document.getElementById('endGameStatus');
const playerOne = 'X'; const playerTwo = 'O';
let playerTurn = playerOne;

const winningPatterns = [ //on rentre tout les valeurs qui permette de donner la victoire a un joueur
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
  cell.addEventListener('click', playGame, { once: true }); //Pour chaque cellule je lance un evenement qui aura lieu au click
});

function playGame(e) {
  e.target.innerHTML = playerTurn; // modifie le html pour y ajouter une croix ou un rond

  if (checkWin(playerTurn)) { // on fait une boucle pour dire que lorsque un joueur gagne ou match nul on stop la partie
    updateGameStatus("wins" + playerTurn);
    return endGame();
  } else if (checkDraw()) {
    updateGameStatus("draw");
    return endGame();
  }

  updateGameStatus(playerTurn);
  playerTurn == playerOne ? playerTurn = playerTwo : playerTurn = playerOne; // on permet au 2 joueurs de jouer chacun leur tours
}

function checkWin(playerTurn) { //cette fonction verifie pendant le  tour d'un joueur si un paterne de victoire et réaliser
    return winningPatterns.some(combination => {
      return combination.every(index => {
        return cells[index].innerHTML == playerTurn;
      });
    });
  }
  
  function checkDraw() { //si toute les cases sont remplies alors on aura un match nul
    return [...cells].every(cell => {
      return cell.innerHTML == playerOne || cell.innerHTML == playerTwo;
    });
  }
  
  function updateGameStatus(status) {
    let statusText;
  
    switch (status) {
      case 'X':
        statusText = "Au tour du joueur 2 (O)";
        break;
      case 'O':
        statusText = "Au tour du joueur 1 (X)";
        break;
      case 'winsX':
        statusText = "Le joueur 1 (X) a gagné!";
        break;
      case 'winsO':
        statusText = "Le joueur 2 (O) a gagné!";
        break;
      case 'draw':
        statusText = "Egalité! Personne ne gagne!";
        break;
    }
  
    gameStatus.innerHTML = statusText;
    endGameStatus.innerHTML = statusText;
  }
  
  function endGame() { document.getElementById('gameEnd').style.display = "block" }
  function reloadGame() { window.location.reload() }