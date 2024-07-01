const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

class Game {
  constructor() {
    this.player = new Player(canvas);
    this.pokeballArr = [];
    this.pokemonArr = [];
    this.pokemonImages = [
      "../assets/bulbasaur.png",
      "../assets/charmander.png",
      "../assets/squirtle.png",
      "../assets/pikachu.png",
    ];
    this.controls();
    this.spawnPokemon();
  }

  start() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.player.draw(ctx);
    this.updatePokeballs();
    this.updatePokemon();
    this.checkCollision();
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
            this.pokeballArr.push(pokeball);
          }
          break;
      }
    }
  }

  updatePokeballs() {
    this.pokeballArr.forEach((pokeball, index) => {
      pokeball.move();
      pokeball.draw(ctx);

      if (pokeball.x > canvas.width) {
        this.pokeballArr.splice(index, 1);
      }
    });
  }

  updatePokemon() {
    this.pokemonArr.forEach((pokemon, index) => {
      pokemon.move();
      pokemon.draw(ctx);
      if (pokemon.x + pokemon.width < 0) {
        this.pokemonArr.splice(index, 1);
      }
    });
  }

  spawnPokemon() {
    setInterval(() => {
      const imageSrc = this.getRandomPokemonImage();
      const pokemon = new Pokemon(canvas, imageSrc);
      this.pokemonArr.push(pokemon);
    }, 1000);
  }

  getRandomPokemonImage() {
    const randomIndex = Math.floor(Math.random() * this.pokemonImages.length);
    return this.pokemonImages[randomIndex];
  }

  checkCollision() {
    this.pokeballArr.forEach((pokeball, pokeballIndex) => {
      this.pokemonArr.forEach((pokemon, pokemonIndex) => {
        if (
          pokeball.x < pokemon.x + pokemon.width &&
          pokeball.x + pokeball.width > pokemon.x &&
          pokeball.y < pokemon.y + pokemon.height &&
          pokeball.y + pokeball.height > pokemon.y
        ) {
          pokemon.image.src = "../assets/capture.png";
          pokemon.speed = 0;
          this.pokeballArr.splice(pokeballIndex, 1);
          setTimeout(() => {
            this.pokemonArr.splice(pokemonIndex, 1);
          }, 100);
        }
      });
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
