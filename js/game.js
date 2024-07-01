// Ensure the script runs after the DOM is fully loaded
// document.addEventListener("DOMContentLoaded", function () {
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

class Game {
  constructor() {
    this.player = new Player(canvas);
    this.pokeballs = [];
    this.controls();
  }

  start() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.player.draw(ctx);
    this.updatePokeballs();
  }

  controls() {
    window.addEventListener("keydown", this.handleKeydown.bind(this));
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
          const pokeball = this.player.throw();
          if (pokeball) {
            this.pokeballs.push(pokeball);
          }
          break;
      }
    }
  }

  updatePokeballs() {
    this.pokeballs.forEach((pokeball, index) => {
      pokeball.move();
      pokeball.draw(ctx);

      if (pokeball.x > canvas.width) {
        this.pokeballs.splice(index, 1);
      }
    });
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
