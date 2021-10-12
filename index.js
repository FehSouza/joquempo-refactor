const $buttonStone1 = document.querySelector(".button-stone-1");
const $buttonPaper1 = document.querySelector(".button-paper-1");
const $buttonScissors1 = document.querySelector(".button-scissors-1");

const $buttonStone2 = document.querySelector(".button-stone-2");
const $buttonPaper2 = document.querySelector(".button-paper-2");
const $buttonScissors2 = document.querySelector(".button-scissors-2");

const $board1 = document.querySelector(".board-1");
const $board2 = document.querySelector(".board-2");

function createImage(type) {
  const img = document.createElement("img");
  img.setAttribute("src", `./images/${type}.png`);
  img.classList.add("image");
  return img;
}

$buttonStone1.addEventListener("click", function () {
  $board1.innerHTML = "";
  const image = createImage("stone");
  $board1.appendChild(image);
});

$buttonPaper1.addEventListener("click", function () {
  $board1.innerHTML = "";
  const image = createImage("paper");
  $board1.appendChild(image);
});

$buttonScissors1.addEventListener("click", function () {
  $board1.innerHTML = "";
  const image = createImage("scissors");
  $board1.appendChild(image);
});

$buttonStone2.addEventListener("click", function () {
  $board2.innerHTML = "";
  const image = createImage("stone");
  $board2.appendChild(image);
});

$buttonPaper2.addEventListener("click", function () {
  $board2.innerHTML = "";
  const image = createImage("paper");
  $board2.appendChild(image);
});

$buttonScissors2.addEventListener("click", function () {
  $board2.innerHTML = "";
  const image = createImage("scissors");
  $board2.appendChild(image);
});
