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

const captureAudio = new Audio("../assets/audio/capture2.wav");
const throwAudio = new Audio("../assets/audio/throw2.mp3 ");
const levelUpAudio = new Audio("../assets/audio/levelup.wav");
const gameOverAudio = new Audio("../assets/audio/gameover.wav");
const heartAudio = new Audio("../assets/audio/heart.wav");
const gainMasterballAudio = new Audio("../assets/audio/masterball.wav");
const useMasterballAudio = new Audio("../assets/audio/usemasterball.wav");
const hitAudio = new Audio("../assets/audio/hit.wav");
const enemyAudio = new Audio("../assets/audio/enemy.wav");

window.onload = () => {
  function startGame() {
    startScreen.style.display = "none";
    interScreen.style.display = "block";
  }

  function playGame() {

    interScreen.style.display = "none";
    canvas.style.display = "block";
    const game = new Game();
    const interval = setInterval(() => {
      game.start();

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
