let WINNING_SCORE = 3;
let player1Score = 0;
let player2Score = 0;
let player1Name = '';
let player2Name = '';

function promptPlayer1() {
  player1Name = prompt("Player 1, what is your name?")
}

function promptPlayer2() {
  player2Name = prompt("Player 2, what is your name?")
}

function illegalMove(name, move) {
  alert(name + ", " + move + " is an illegal move minus 1!");
}

function tie() {
  console.log("It's a tie!")
}

function winningMove(winningName, losingName, winningScore, losingScore, winningMove, losingMove) {
  console.log(winningMove + " beats " + losingMove);
  console.log(winningName + " won that round");

  if(winningScore > losingScore) {
    console.log(winningName + " is winning " + winningScore + " - " + losingScore);
  }
  if(winningScore < losingScore) {
    console.log(losingName + " is winning " + winningScore + " - " + losingScore);
  }
  if(winningScore == losingScore) {
    console.log("The game is tied" + winningScore + " - " + losingScore);
  }
}

function play() {
  let player1Move = prompt(player1Name + ", rock, paper, or scissors?")
  let player2Move = prompt(player2Name + ", rock, paper, or scissors?")

  if(player1Move === null || player2Move === null) {
    return;
  } 

  alert("Rock... Paper.... Scissors....., check console")

  if(player1Move === "rock") {
    if(player2Move === "rock") {
      tie();
    } else if (player2Move === 'paper') {
      player2Score = player2Score + 1;
      winningMove(player2Name, player1Name, player2Score, player1Score, player2Move, player1Move);
    } else if (player2Move === 'scissors') {
      player1Score = player1Score + 1;
      winningMove(player1Name, player2Name, player1Score, player2Score, player1Move, player2Move);
    } else {
      player2Score = player2Score - 1;
      illegalMove(player2Name, player2Move);
    }
  } else if (player1Move === 'paper') {
    if(player2Move === "rock") {
      player1Score = player1Score + 1;
      winningMove(player2Name, player1Name, player2Score, player1Score, player2Move, player1Move);
    } else if (player2Move === 'paper') {
      tie();
    } else if (player2Move === 'scissors') {
      player2Score = player2Score + 1;
      winningMove(player1Name, player2Name, player1Score, player2Score, player1Move, player2Move);
    } else {
      player2Score = player2Score - 1;
      illegalMove(player2Name, player2Move);
    }
  } else if (player1Move === 'scissors') {
    if(player2Move === "rock") {
      player2Score = player2Score + 1;
      winningMove(player2Name, player1Name, player2Score, player1Score, player2Move, player1Move);
    } else if (player2Move === 'paper') {
      player1Score = player1Score + 1;
      winningMove(player1Name, player2Name, player1Score, player2Score, player1Move, player2Move);
    } else if (player2Move === 'scissors') {
      tie();
    } else {
      player2Score = player2Score - 1;
      illegalMove(player2Name, player2Move);
    }
  } else {
    player2Score = player2Score - 1;
    illegalMove(player1Name, player2Move);
  }

  if(player1Score > WINNING_SCORE) {
    winner(player1Name);
  } else if (player2Score > WINNING_SCORE) {
    winner(player1Name);
  } else {
    play();
  }
}

promptPlayer1();
promptPlayer2();
play();
