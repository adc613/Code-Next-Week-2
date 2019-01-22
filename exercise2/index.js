let WINNING_SCORE = 3;
let player1Score = 0;
let player2Score = 0;

/**
 * Asks the first player for their name.
 */
function askForPlayer1Name() {
  return prompt("Player 1, what is your name?")
}

/**
 * Alert the user that they made an illegal move.
 */
function illegalMove(name, move) {
  alert(name + ", " + move + " is an illegal move minus 1!");
}

/**
 * Display a message for when there's a tie
 */
function tieMessage() {
  // TODO
}

/**
 * Log the score in console
 */
function displayGameStatus(/** Add args **/) {
  // TODO
}

/**
 * Performs all actions required to play a game of Rock, Paper, Scissors.
 */
function play(player1Name, player2Name) {
  let player1Move = prompt(player1Name + ", rock, paper, or scissors?")
  let player2Move = prompt(player2Name + ", rock, paper, or scissors?")

  if(player1Move === null || player2Move === null) {
    return;
  }

  // TODO Fill in game logic
}

let player1Name = askForPlayer1Names();
let player2Name = askForPlayer2Names(); // TODO Write this function
play(player1Name, player2Name);
