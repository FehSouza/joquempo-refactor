const $buttonStone1 = document.querySelector(".button-stone-1");
const $buttonPaper1 = document.querySelector(".button-paper-1");
const $buttonScissors1 = document.querySelector(".button-scissors-1");
const $buttonStone2 = document.querySelector(".button-stone-2");
const $buttonPaper2 = document.querySelector(".button-paper-2");
const $buttonScissors2 = document.querySelector(".button-scissors-2");
const $buttonReset = document.querySelector(".button-reset");
const $buttonStart = document.querySelector(".button-start");

const $board1 = document.querySelector(".board-1");
const $board2 = document.querySelector(".board-2");

const $winnerName = document.querySelector(".player-winner");

const $scoreboard1 = document.querySelector(".player-points-1");
const $scoreboard2 = document.querySelector(".player-points-2");

let player1 = "";
let player2 = "";
let resultVerifyWinner = null;
let contador1 = 0;
let contador2 = 0;

function createImage(type) {
  const img = document.createElement("img");
  img.setAttribute("src", `./images/${type}.png`);
  img.classList.add("image");
  return img;
}

function verifyWinner() {
  console.log(resultVerifyWinner);
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

function ativaBordaBoard(winner) {
  if (winner == 0) {
    $board1.classList.add("borda-amarela");
    $board2.classList.add("borda-amarela");
  }
  if (winner == 1) {
    $board1.classList.add("borda-verde");
    $board2.classList.add("borda-vermelha");
  }
  if (winner == 2) {
    $board2.classList.add("borda-verde");
    $board1.classList.add("borda-vermelha");
  }
}

function desativaBordaBoard() {
  $board1.classList.remove("borda-amarela");
  $board1.classList.remove("borda-verde");
  $board1.classList.remove("borda-vermelha");
  $board2.classList.remove("borda-amarela");
  $board2.classList.remove("borda-verde");
  $board2.classList.remove("borda-vermelha");
}

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
  desativaBordaBoard();
}

function resetWinnerName() {
  $winnerName.innerHTML = "Aguardando iniciar!";
}

function resetScoreboard() {
  contador1 = 0;
  contador2 = 0;
  $scoreboard1.innerHTML = "0";
  $scoreboard2.innerHTML = "0";
}

function selectDisableButtons(parametro1, parametro2, parametro3, parametro4) {
  if (parametro1) {
    disableButtons(parametro1);
  }
  if (parametro2) {
    disableButtons(parametro2);
  }
  if (parametro3) {
    disableButtons(parametro3);
  }
  if (parametro4) {
    disableButtons(parametro4);
  }
}

function disableButtons(player) {
  if (player == 1) {
    $buttonStone1.disabled = true;
    $buttonPaper1.disabled = true;
    $buttonScissors1.disabled = true;
  } else if (player == 2) {
    $buttonStone2.disabled = true;
    $buttonPaper2.disabled = true;
    $buttonScissors2.disabled = true;
  } else if (player == "reset") {
    $buttonReset.disabled = true;
  } else if (player == "start") {
    $buttonStart.disabled = true;
  }
}

function enableButtons() {
  $buttonStone1.disabled = false;
  $buttonPaper1.disabled = false;
  $buttonScissors1.disabled = false;
  $buttonStone2.disabled = false;
  $buttonPaper2.disabled = false;
  $buttonScissors2.disabled = false;
  $buttonReset.disabled = false;
}

function givePoints(winner) {
  if (winner == 1) {
    contador1++;
    $scoreboard1.innerHTML = contador1;
  } else if (winner == 2) {
    contador2++;
    $scoreboard2.innerHTML = contador2;
  }
}

selectDisableButtons(1, 2, "reset");

$buttonStone1.addEventListener("click", function () {
  $board1.innerHTML = "";
  const image = createImage("stone");
  $board1.appendChild(image);
  player1 = "stone";
  disableButtons(1);
  verifyWinner();
  printWinnerName(resultVerifyWinner);
  if ($board1.innerHTML != "" && $board2.innerHTML != "") {
    ativaBordaBoard(resultVerifyWinner);
    givePoints(resultVerifyWinner);
    setTimeout(resetBoard, 1500);
    setTimeout(enableButtons, 1500);
  }
});

$buttonPaper1.addEventListener("click", function () {
  $board1.innerHTML = "";
  const image = createImage("paper");
  $board1.appendChild(image);
  player1 = "paper";
  disableButtons(1);
  verifyWinner();
  printWinnerName(resultVerifyWinner);
  if ($board1.innerHTML != "" && $board2.innerHTML != "") {
    ativaBordaBoard(resultVerifyWinner);
    givePoints(resultVerifyWinner);
    setTimeout(resetBoard, 1500);
    setTimeout(enableButtons, 1500);
  }
});

$buttonScissors1.addEventListener("click", function () {
  $board1.innerHTML = "";
  const image = createImage("scissors");
  $board1.appendChild(image);
  player1 = "scissors";
  disableButtons(1);
  verifyWinner();
  printWinnerName(resultVerifyWinner);
  if ($board1.innerHTML != "" && $board2.innerHTML != "") {
    ativaBordaBoard(resultVerifyWinner);
    givePoints(resultVerifyWinner);
    setTimeout(resetBoard, 1500);
    setTimeout(enableButtons, 1500);
  }
});

$buttonStone2.addEventListener("click", function () {
  $board2.innerHTML = "";
  const image = createImage("stone");
  $board2.appendChild(image);
  player2 = "stone";
  disableButtons(2);
  verifyWinner();
  printWinnerName(resultVerifyWinner);
  if ($board1.innerHTML != "" && $board2.innerHTML != "") {
    ativaBordaBoard(resultVerifyWinner);
    givePoints(resultVerifyWinner);
    setTimeout(resetBoard, 1500);
    setTimeout(enableButtons, 1500);
  }
});

$buttonPaper2.addEventListener("click", function () {
  $board2.innerHTML = "";
  const image = createImage("paper");
  $board2.appendChild(image);
  player2 = "paper";
  disableButtons(2);
  verifyWinner();
  printWinnerName(resultVerifyWinner);
  if ($board1.innerHTML != "" && $board2.innerHTML != "") {
    ativaBordaBoard(resultVerifyWinner);
    givePoints(resultVerifyWinner);
    setTimeout(resetBoard, 1500);
    setTimeout(enableButtons, 1500);
  }
});

$buttonScissors2.addEventListener("click", function () {
  $board2.innerHTML = "";
  const image = createImage("scissors");
  $board2.appendChild(image);
  player2 = "scissors";
  disableButtons(2);
  verifyWinner();
  printWinnerName(resultVerifyWinner);
  if ($board1.innerHTML != "" && $board2.innerHTML != "") {
    ativaBordaBoard(resultVerifyWinner);
    givePoints(resultVerifyWinner);
    setTimeout(resetBoard, 1500);
    setTimeout(enableButtons, 1500);
  }
});

$buttonReset.addEventListener("click", function () {
  resetBoard();
  resetWinnerName();
  resetScoreboard();
  selectDisableButtons(1, 2, "reset");
  $buttonStart.disabled = false;
});

$buttonStart.addEventListener("click", function () {
  enableButtons();
  selectDisableButtons("start");
  $winnerName.innerHTML = "Aguardando a jogada!";
});
