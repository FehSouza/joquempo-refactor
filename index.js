const $buttonStone1 = document.querySelector(".button-stone-1");
const $buttonPaper1 = document.querySelector(".button-paper-1");
const $buttonScissors1 = document.querySelector(".button-scissors-1");

const $buttonStone2 = document.querySelector(".button-stone-2");
const $buttonPaper2 = document.querySelector(".button-paper-2");
const $buttonScissors2 = document.querySelector(".button-scissors-2");

const $board1 = document.querySelector(".board-1");
const $board2 = document.querySelector(".board-2");

const $winnerName = document.querySelector(".player-winner");

let player1 = "";
let player2 = "";
let resultVerifyWinner = null;

function createImage(type) {
  const img = document.createElement("img");
  img.setAttribute("src", `./images/${type}.png`);
  img.classList.add("image");
  return img;
}

function verifyWinner() {
    console.log(resultVerifyWinner)
  if (player1 == player2) {
    resultVerifyWinner = 0;
  } else if (
    (player1 == "stone" && player2 == "scissors") ||
    (player1 == "paper" && player2 == "stone") ||
    (player1 == "scissors" && player2 == "paper")
  ) {
    resultVerifyWinner = 1;
  } else if (
    (player2 == "stone" && player1 == "scissors") ||
    (player2 == "paper" && player1 == "stone") ||
    (player2 == "scissors" && player1 == "paper")
  ) {
    resultVerifyWinner = 2;
  }
}
// function verifyWinner() {
//   if (player1 == player2) {
//     return 0;
//   } else if (
//     (player1 == "stone" && player2 == "scissors") ||
//     (player1 == "paper" && player2 == "stone") ||
//     (player1 == "scissors" && player2 == "paper")
//   ) {
//     return 1;
//   } else if (
//     (player2 == "stone" && player1 == "scissors") ||
//     (player2 == "paper" && player1 == "stone") ||
//     (player2 == "scissors" && player1 == "paper")
//   ) {
//     return 2;
//   }
// }

function printWinnerName(winner) {
  if (winner == 0) {
    $winnerName.innerHTML = "Empatou!";
  } else if (winner == 1) {
    $winnerName.innerHTML = "Jogador 1 ganhou!";
  } else if (winner == 2) {
    $winnerName.innerHTML = "Jogador 2 ganhou!";
  }
}

function resetBoard() {
  $board1.innerHTML = "";
  $board2.innerHTML = "";
  player1 = "";
  player2 = "";
  resultVerifyWinner = null;
}

$buttonStone1.addEventListener("click", function () {
  $board1.innerHTML = "";
  const image = createImage("stone");
  $board1.appendChild(image);
  player1 = "stone";
  verifyWinner();
  printWinnerName(resultVerifyWinner);
  if ($board1.innerHTML != "" && $board2.innerHTML != "") {
    setTimeout(resetBoard, 1500);
  }
});

$buttonPaper1.addEventListener("click", function () {
  $board1.innerHTML = "";
  const image = createImage("paper");
  $board1.appendChild(image);
  player1 = "paper";
  verifyWinner();
  printWinnerName(resultVerifyWinner);
  if ($board1.innerHTML != "" && $board2.innerHTML != "") {
    setTimeout(resetBoard, 1500);
  }
});

$buttonScissors1.addEventListener("click", function () {
  $board1.innerHTML = "";
  const image = createImage("scissors");
  $board1.appendChild(image);
  player1 = "scissors";
  verifyWinner();
  printWinnerName(resultVerifyWinner);
  if ($board1.innerHTML != "" && $board2.innerHTML != "") {
    setTimeout(resetBoard, 1500);
  }
});

$buttonStone2.addEventListener("click", function () {
  $board2.innerHTML = "";
  const image = createImage("stone");
  $board2.appendChild(image);
  player2 = "stone";
  verifyWinner();
  printWinnerName(resultVerifyWinner);
  if ($board1.innerHTML != "" && $board2.innerHTML != "") {
    setTimeout(resetBoard, 1500);
  }
});

$buttonPaper2.addEventListener("click", function () {
  $board2.innerHTML = "";
  const image = createImage("paper");
  $board2.appendChild(image);
  player2 = "paper";
  verifyWinner();
  printWinnerName(resultVerifyWinner);
  if ($board1.innerHTML != "" && $board2.innerHTML != "") {
    setTimeout(resetBoard, 1500);
  }
});

$buttonScissors2.addEventListener("click", function () {
  $board2.innerHTML = "";
  const image = createImage("scissors");
  $board2.appendChild(image);
  player2 = "scissors";
  verifyWinner();
  printWinnerName(resultVerifyWinner);
  if ($board1.innerHTML != "" && $board2.innerHTML != "") {
    setTimeout(resetBoard, 1500);
  }
});
