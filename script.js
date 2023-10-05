let result;
let computerMove;
let playerMove;

function getComputerMove() {
  let computerRandom = Math.random();

  if (computerRandom > 0 / 3 && computerRandom < 1 / 3) {
    computerMove = "Rock";
  } else if (computerRandom > 1 / 3 && computerRandom < 2 / 3) {
    computerMove = "Paper";
  } else if (computerRandom > 2 / 3 && computerRandom < 3 / 3) {
    computerMove = "Scissors";
  }
  return computerMove;
}

function gameStart(playerMove, computerMove) {
  if (playerMove === "rock" || playerMove === "ROCK" || playerMove === "Rock") {
    result =
      computerMove === "Scissors"
        ? "You win! You Rock, computer scissors"
        : computerMove === "Paper"
        ? "You lose! You Rock, computer Paper"
        : "Tie! You Rock, computer Rock";
  } else if (
    playerMove === "paper" ||
    playerMove === "PAPER" ||
    playerMove === "Paper"
  ) {
    result =
      computerMove === "Scissors"
        ? "You lose! You Paper, computer Scissors"
        : computerMove === "Paper"
        ? "Tie! You Paper, computer Paper"
        : "You win! You Paper, computer Rock";
  } else if (
    playerMove === "scissors" ||
    playerMove === "SCISSORS" ||
    playerMove === "Scissors"
  ) {
    result =
      computerMove === "Scissors"
        ? "Tie! You scissors, computer Scissors"
        : computerMove === "Paper"
        ? "You win! You Scissors, computer Paper"
        : "You lose! You Scissors, computer Rock";
  } else {
    result = "You must enter the right move";
  }
  return result;
}

playerMove = window.prompt('Pick move: "Rock/Paper/Scissors"', "");

console.log(gameStart(playerMove, computerMove));
