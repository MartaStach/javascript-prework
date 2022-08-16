var argButtonName, buttonPaper, buttonRock, buttonScissors, buttonTest, buttonReset, buttonSaper, set;


buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');
buttonReset = document.getElementById('button-reset');
buttonSaper = document.getElementById('button-saper');
buttonBomb=document.getElementById('bomb');




/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    printMessage('Ruch komputera to ' + computerMove);
    clearResults();
    displayResult(playerMove, computerMove);
  }

/**
 * Describe this function...
 */
  function buttonResetClicked(_buttonReset) {
    console.log(argButtonName + 'został kliknięty')
    console.log( 'wyniki zostały zresetowane');
    clearMessages();
    clearResults();
    playerResult = 0;
    computerResult = 0;
  }

var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;


/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
    playerResult=playerResult + 1
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
    playerResult=playerResult + 1
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
    playerResult=playerResult + 1
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis');
  } else {
    printMessage('Przegrywasz');
    computerResult=computerResult + 1
  }
  printResults(playerResult + '-' + computerResult)
}

var playerResult, computerResult

playerResult=0;
computerResult=0;


//saper
var buttonSaper, argIdName

function buttonSaperClicked () {
  firstBombNumber = 0;
  secondBombNumber = 0;
  thirdBombNumber = 0;
  clearMessages();
  var {computerFirstBombSaper, computerSecondBombSaper, computerThridBombSaper} = mixBombNumbers();
  GuessBomb(computerFirstBombSaper, computerSecondBombSaper, computerThridBombSaper);
 
  } 

function mixBombNumbers() {
  console.log('1');
  firstBombNumber  = Math.floor(Math.random() * 9 + 1);
  console.log('Numer pierwszej bomby to ' + firstBombNumber);
  secondBombNumber = Math.floor(Math.random() * 9 + 1);
  while (secondBombNumber == firstBombNumber) {
    secondBombNumber = Math.floor(Math.random() * 9 + 1);
    console.log('Ponowne losowanie drugiej liczby');
  }
  console.log('Numer drugiej bomby to ' + secondBombNumber);
  thirdBombNumber = Math.floor(Math.random() * 9 + 1);
  while (thirdBombNumber == firstBombNumber || thirdBombNumber == secondBombNumber) {
    thirdBombNumber = Math.floor(Math.random() * 9 + 1);
    console.log('Ponowne losowanie trzeciej liczby');
  }
  console.log('Numer trzeciej bomby to ' + thirdBombNumber);
  computerFirstBombSaper = getIdName(firstBombNumber);
  computerSecondBombSaper = getIdName(secondBombNumber);
  computerThridBombSaper = getIdName(thirdBombNumber)
  console.log('Położenie bomb to: ' + computerFirstBombSaper +', ' + computerSecondBombSaper + ', ' +  computerThridBombSaper);
  return {computerFirstBombSaper, computerSecondBombSaper, computerThridBombSaper};
}

function getIdName(bombnumber) {
  if (bombnumber == 1) {
    return 'a1';
  } else if (bombnumber == 2) {
    return 'a2';
  } else if (bombnumber == 3) {
    return 'a3';
  } else if (bombnumber == 4) {
    return 'b1';
  } else if (bombnumber == 5) {
    return 'b2';
  } else if (bombnumber == 6) {
    return 'b3';
  } else if (bombnumber == 7) {
    return 'c1';
  } else if (bombnumber == 8) {
    return 'c2';
  } else if (bombnumber == 9) {
    return 'c3';
  }
}
function GuessBomb (firstBombNumber, secondBombNumber, thirdBombNumber) {
  playerMoveSaper = prompt ();
  console.log('Gracz wybrał pole ' + playerMoveSaper);
  playersChoiceChecking (playerMoveSaper, firstBombNumber, secondBombNumber, thirdBombNumber);
}


//uproszczenie
function playersChoiceChecking (playersChoice, firstBombNumber, secondBombNumber, thirdBombNumber) {
  if (playersChoice == firstBombNumber || playersChoice == secondBombNumber || playersChoice == thirdBombNumber) {
    BadChoiceSaper (playersChoice);
  } else {
    GoodSaperChoice (playersChoice);
      if (playersChoice == firstBombNumber || playersChoice == secondBombNumber || playersChoice == thirdBombNumber) {
        BadChoiceSaper (playersChoice);
      } else {
        GoodSaperChoice (playersChoice);
        if (playersChoice == firstBombNumber || playersChoice == secondBombNumber || playersChoice == thirdBombNumber) {
          BadChoiceSaper (playersChoice);
        } else {
          GoodSaperChoice (playersChoice);
          if (playersChoice == firstBombNumber || playersChoice == secondBombNumber || playersChoice == thirdBombNumber) {
            BadChoiceSaper (playersChoice);
          } else {
            GoodSaperChoice (playersChoice);
            if (playersChoice == firstBombNumber || playersChoice == secondBombNumber || playersChoice == thirdBombNumber) {
              BadChoiceSaper (playersChoice);
            } else {
              putX (playersChoice);
              printSaperResults('Wygrałeś!');
            }
          }
        }
      }
    }
  }

//uproszczenie
function BadChoiceSaper (playersBadChoice){
  putBomb (playersBadChoice);
  printSaperResults('Przegrałeś, naciśnij bombę i zagraj jeszcze raz');
}

function GoodSaperChoice (playersGoodChoice) {
  putX (playersGoodChoice);
  playersChoice = prompt('Dobrze, graj dalej! Wybierz pole, na którym nie spodziewasz się bomby: a1, a2, a3, b1, b2, b3, c1, c2, c3. Wpisz numer pola:');
}




function BadChoice (NextMove) {
  putBomb (NextMove);
  printMessage('Przegrałeś, naciśnij bombę i zagraj jeszcze raz');
  firstBombNumber = 0;
  secondBombNumber = 0;
  thirdBombNumber = 0;
}
function NextLevel () {
  if (playerMoveSaper == firstBombNumber || playerMoveSaper == secondBombNumber || playerMoveSaper == thirdBombNumber) {

  } else {
    GuessBomb ();
  }
}


//buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });
buttonRock.addEventListener('click', function () { buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function () { buttonClicked('papier'); });
buttonScissors.addEventListener('click', function () { buttonClicked('nożyce'); });
buttonReset.addEventListener('click', function () { buttonResetClicked('reset'); });
buttonSaper.addEventListener('click', function () { buttonSaperClicked('saper'); });


