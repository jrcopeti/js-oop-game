const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const startScreen = document.getElementById("game-intro");
const gameEndScreen = document.getElementById("game-end");
const restartButton = document.getElementById("restart-button");

window.onload = () => {
  const game = new Game();
  const interval = setInterval(() => {
    game.start();
  }, Math.round(1000 / 60));

  if (game.gameOver) {
    clearInterval(interval);
  }

  restartButton.addEventListener("click", () => {
    location.reload();
  });
};
