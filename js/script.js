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

//Audio

const musicVol = 0.3;
const sfxVol = 0.7;

const captureAudio = new Audio("../assets/audio/capture2.wav");
const throwAudio = new Audio("../assets/audio/throw2.mp3 ");
// const levelUpAudio = new Audio("../assets/audio/levelup.wav");
const levelUpAudio = new Audio("../assets/audio/levelup2.mp3");
levelUpAudio.volume = musicVol;
const gameOverAudio = new Audio("../assets/audio/gameover.wav");
// const heartAudio = new Audio("../assets/audio/heart.wav");
const heartAudio = new Audio("../assets/audio/heart2.mp3");
heartAudio.volume = sfxVol;

const gainMasterballAudio = new Audio("../assets/audio/masterball.wav");
// const gainMasterballAudio = new Audio("../assets/audio/masterball2.mp3");
gainMasterballAudio.volume = sfxVol;
const useMasterballAudio = new Audio("../assets/audio/explode.wav");
const hitAudio = new Audio("../assets/audio/hit.wav");
const enemyAudio = new Audio("../assets/audio/enemy.wav");

// Music
const introMusic = document.getElementById("introMusic");
introMusic.volume = musicVol;
introMusic.play();

const level1Music = new Audio("../assets/audio/music/level1.mp3");
const level2Music = new Audio("../assets/audio/music/level2.mp3");
const level3Music = new Audio("../assets/audio/music/level3.mp3");
const level4Music = new Audio("../assets/audio/music/level4.mp3");
const level5Music = new Audio("../assets/audio/music/level5.mp3");
const level6Music = new Audio("../assets/audio/music/level6.mp3");
const level7Music = new Audio("../assets/audio/music/level7.mp3");
const level8Music = new Audio("../assets/audio/music/level8.mp3");

window.onload = () => {
  function startGame() {
    startScreen.style.display = "none";
    interScreen.style.display = "block";
    introMusic.pause();
    introMusic.currentTime = 0;
  }

  function playGame() {
    const game = new Game();
    game.start();
    const interval = setInterval(() => {
      game.update();

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
