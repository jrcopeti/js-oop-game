//Selecting elements
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

const captureAudio = document.createElement("audio");
captureAudio.src = "../assets/audio/capture2.wav";

const throwAudio = document.createElement("audio");
throwAudio.src = "../assets/audio/throw2.mp3";

const levelUpAudio = document.createElement("audio");
levelUpAudio.src = "../assets/audio/levelup.mp3";
levelUpAudio.volume = musicVol;

const gameOverAudio = document.createElement("audio");
gameOverAudio.src = "../assets/audio/gameover.wav";
gameOverAudio.volume = sfxVol;

const heartAudio = document.createElement("audio");
heartAudio.src = "../assets/audio/heart.mp3";
heartAudio.volume = sfxVol;

const gainMasterballAudio = document.createElement("audio");
gainMasterballAudio.src = "../assets/audio/masterball.wav";
gainMasterballAudio.volume = sfxVol;

const useMasterballAudio = document.createElement("audio");
useMasterballAudio.src = "../assets/audio/explode.wav";

const hitAudio = document.createElement("audio");
hitAudio.src = "../assets/audio/hit.wav";

const enemyAudio = document.createElement("audio");
enemyAudio.src = "../assets/audio/enemy.wav";

// Music
const introMusic = document.getElementById("introMusic");
introMusic.volume = musicVol;
introMusic.play();

const level1Music = document.createElement("audio");
level1Music.src = "../assets/audio/music/level1.mp3";

const level2Music = document.createElement("audio");
level2Music.src = "../assets/audio/music/level2.mp3";

const level3Music = document.createElement("audio");
level3Music.src = "../assets/audio/music/level3.mp3";

const level4Music = document.createElement("audio");
level4Music.src = "../assets/audio/music/level4.mp3";

const level5Music = document.createElement("audio");
level5Music.src = "../assets/audio/music/level5.mp3";

const level6Music = document.createElement("audio");
level6Music.src = "../assets/audio/music/level6.mp3";

const level7Music = document.createElement("audio");
level7Music.src = "../assets/audio/music/level7.mp3";

const level8Music = document.createElement("audio");
level8Music.src = "../assets/audio/music/level8.mp3";

const level9Music = document.createElement("audio");
level9Music.src = "../assets/audio/music/level9.mp3";

const level10Music = document.createElement("audio");
level10Music.src = "../assets/audio/music/level10.mp3";

// Game
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

    function gameLoop() {
      game.update();

      if (!game.gameOver) {
        requestAnimationFrame(gameLoop);
      }
    }

    gameLoop();
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



  // function playGame() {
  //   const game = new Game();
  //   game.start();
  //   const interval = setInterval(() => {
  //     game.update();

  //     if (game.gameOver) {
  //       clearInterval(interval);
  //     }
  //   }, Math.round(1000 / 60));
  // }
