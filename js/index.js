const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const startScreen = document.getElementById("game-intro");
const interScreen = document.getElementById("game-inter");
const gameEndScreen = document.getElementById("game-end");

const startButton = document.getElementById("start-button");
const playButton = document.getElementById("play-button");
const restartButton = document.getElementById("restart-button");

window.onload = () => {
  function startGame() {
    startScreen.style.display = "none";
    interScreen.style.display = "block";
  }

  function playGame() {
    startScreen.style.display = "none";
    canvas.style.display = "block";
    const game = new Game();
    const interval = setInterval(() => {
      game.start();
    }, Math.round(1000 / 60));

    if (game.gameOver) {
      clearInterval(interval);
    }
  }

  startButton.addEventListener("click", () => {
    startGame();
  });

  playButton.addEventListener("click", () => {
    playGame();
  });

  restartButton.addEventListener("click", () => {
    location.reload();
  });
};
