let WINNING_SCORE = 3;
let player1Score = 0;
let player2Score = 0;
;

function askForPlayer1Name() {
  return prompt("Player 1, what is your name?")
}

function illegalMove(name, move) {
  alert(name + ", " + move + " is an illegal move minus 1!");
}

function tieMessage() {
  // TODO
}

function displayMessage(/** Add args **/) {
  // TODO
}

function play(player1Name, player2Name) {
  let player1Move = prompt(player1Name + ", rock, paper, or scissors?")
  let player2Move = prompt(player2Name + ", rock, paper, or scissors?")
  
  if(player1Move === null || player2Move === null) {
    return;
  }

  // TODO Fill in game logic
}

let player1Name = askForPlayer1Names();
let player2Name = askForPlayer2Names(); // TODO Write this method
play(player1Name, player2Name);
