const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlayElement = document.querySelector(".config-overlay");
const backdropElement = document.querySelector(".backdrop");

const formElement = document.querySelector("form");

const errorOutputElement = document.getElementById("config-error");

const errorChangeStyle = document.querySelector(".form-control");

const gameAreaElement = document.querySelector(".active-game");

const editPlayer1ButtonElement = document.getElementById("edit-button-player1");
const editPlayer2ButtonElement = document.getElementById("edit-button-player2");

const cancelConfigButtonElement = document.getElementById("cancel-config-btn");

const startGameButtonElement = document.getElementById("start-btn");

const warningElement = document.querySelector(".warning");

// const gameFieldElements = document.querySelectorAll(".game-board li");

const gameBoardElements = document.querySelector(".game-board");

const activePlayerName = document.querySelector(".active-player-name");

const gameOverElement = document.querySelector(".game-over");

editPlayer1ButtonElement.addEventListener("click", openPlayerConfig);
editPlayer2ButtonElement.addEventListener("click", openPlayerConfig);

cancelConfigButtonElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startGameButtonElement.addEventListener("click", startNewGame);

// for (const gameFieldElement of gameFieldElements) {
//   gameFieldElement.addEventListener("click", selectGameField);
// }

gameBoardElements.addEventListener("click", selectGameField);
