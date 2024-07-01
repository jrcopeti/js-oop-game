// Ensure the script runs after the DOM is fully loaded
// document.addEventListener("DOMContentLoaded", function () {
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

class Game {
  constructor() {
    this.player = new Player(canvas);
    this.controls();
  }

  start() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.player.draw(ctx);
  }

  controls() {
    window.addEventListener("keydown", this.handleKeydown.bind(this));
    // window.addEventListener("keydown", (e) => {
    //   // preventDefault(e);
    //   if (e.key === "ArrowUp") {
    //     this.player.move("up");
    //   } else if (e.key === "ArrowDown") {
    //     this.player.move("down");
    //   } else if (e.key === " ") {
    //     this.player.throw();
    //   }
    //   // this.start();
    // });
  }

  handleKeydown(e) {
    const key = e.key;
    const possibleKeys = ["ArrowUp", "ArrowDown", " "];
    if (possibleKeys.includes(key)) {
      e.preventDefault();

      switch (key) {
        case "ArrowUp":
          this.player.move("up");
          break;
        case "ArrowDown":
          this.player.move("down");
          break;
        case " ":
          this.player.throw();
          break;
      }
    }
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
