// Ensure the script runs after the DOM is fully loaded
// document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  class Game {
    constructor() {
      this.player = new Player(canvas);
    }

    start() {
      // ctx.clearRect(0, 0, canvas.width, canvas.height);

      this.player.draw(ctx);
    }
  }

  const game = new Game();

  function gameLoop() {
    game.start();
    requestAnimationFrame(gameLoop);
  }

  gameLoop();

  console.log("Game class loaded");
// });
