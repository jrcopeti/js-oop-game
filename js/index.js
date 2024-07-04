const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const startScreen = document.getElementById("game-intro");
const interScreen = document.getElementById("game-inter");
const endScreen = document.getElementById("game-end");
const finalScreen = document.getElementById("game-final");

const startButton = document.getElementById("start-button");
const playButton = document.getElementById("play-button");
const restartButton = document.getElementById("restart-button");
const restartFinalButton = document.getElementById("restart-final-button");

const scoreDisplay = document.getElementById("score");
const finalScoreDisplay = document.getElementById("final-score");

window.onload = () => {
  function startGame() {
    // endScreen.style.display = "none";
    // finalScreen.style.display = "none";
    startScreen.style.display = "none";
    interScreen.style.display = "block";
  }

  function playGame() {
    // startScreen.style.display = "none";
    interScreen.style.display = "none";
    // endScreen.style.display = "none";
    // finalScreen.style.display = "none";
    canvas.style.display = "block";
    const game = new Game();
    const interval = setInterval(() => {
      game.start();
      console.log("gameOver", game.gameOver);
      console.log("gameWon,", game.gameWon);
      if (game.gameOver) {
        clearInterval(interval);
      }
    }, Math.round(1000 / 60));
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

  restartFinalButton.addEventListener("click", () => {
    location.reload();
  });
};
