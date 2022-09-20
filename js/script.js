
let playerResult, computerResult, randomNumber, playerMove, computerMove;
const buttonRock = document.getElementById('button-rock'),
  buttonPaper = document.getElementById('button-paper'),
  buttonScissors = document.getElementById('button-scissors'),
  buttonReset = document.getElementById('button-reset');



function buttonClicked(playerMove) {
  clearMessages();
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  printMessage('Ruch komputera to ' + computerMove);
  clearResults();
  displayResult(playerMove, computerMove);
}


function buttonResetClicked(buttonReset) {
  clearMessages();
  clearResults();
  playerResult = 0;
  computerResult = 0;
}


function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  }
  printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
  return 'kamień';
}


playerResult = 0;
computerResult = 0;

function displayResult(argPlayerMove, argComputerMove) {
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
    playerResult = playerResult + 1
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
    playerResult = playerResult + 1
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
    playerResult = playerResult + 1
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis');
  } else {
    printMessage('Przegrywasz');
    computerResult = computerResult + 1
  }
  printResults(playerResult + '-' + computerResult)
}

buttonRock.addEventListener('click', function () { buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function () { buttonClicked('papier'); });
buttonScissors.addEventListener('click', function () { buttonClicked('nożyce'); });
buttonReset.addEventListener('click', function () { buttonResetClicked('reset'); });


