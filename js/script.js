

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else if (randomNumber == '3') {
  computerMove = 'nożyce';
} else {
  computerMove = 'papier';
}
printMessage('Mój ruch: ' + computerMove);
