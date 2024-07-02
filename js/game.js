const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const pokemonData = [
  { imageSrc: "../assets/pokemon/bulbasaur.png", score: 20 },
  { imageSrc: "../assets/pokemon/butterfree.png", score: 10 },
  { imageSrc: "../assets/pokemon/charmander.png", score: 20 },
  { imageSrc: "../assets/pokemon/jigglypuff.png", score: 10 },
  { imageSrc: "../assets/pokemon/meowth.png", score: 10 },
  { imageSrc: "../assets/pokemon/pidgiotto.png", score: 10 },
  { imageSrc: "../assets/pokemon/pikachu.png", score: 30 },
  { imageSrc: "../assets/pokemon/squirtle.png", score: 20 },
  { imageSrc: "../assets/pokemon/starmie.png", score: 20 },
];

const specialPokemonData = [
  { imageSrc: "../assets/special-pokemon/celebi.png", score: 100 },
  { imageSrc: "../assets/special-pokemon/entei.png", score: 150 },
  { imageSrc: "../assets/special-pokemon/ho-oh.png", score: 100 },
  { imageSrc: "../assets/special-pokemon/mew.png", score: 150 },
  { imageSrc: "../assets/special-pokemon/mewtwo.png", score: 100 },
];

const levels = [
  {
    level: "1",
    background: "../assets/background/mount-background.png",
    maxCount: 200,
    rate: 200,
    speed: 10,
  },
  {
    level: "2",
    background: "../assets/background/cave.png",
    maxCount: 5,
    rate: 900,
    speed: 3,
  },
  {
    level: "3",
    background: "../assets/background/veridian.png",
    maxCount: 5,
    rate: 1000,
    speed: 5,
  },
  {
    level: "4",
    background: "../assets/background/mirage-island.png",
    maxCount: 4000,
    rate: 1000,
    speed: 6,
  },
  {
    level: "5",
    background: "../assets/background/safron.png",
    maxCount: 5000,
    rate: 500,
    speed: 7,
  },
  {
    level: "6",
    background: "../assets/background/ancient.png",
    maxCount: 6000,
    rate: 500,
    speed: 9,
  },
];

class Game {
  constructor() {
    this.player = new Player(canvas);
    this.pokeballArr = [];
    this.pokemonArr = [];
    this.pokemonData = pokemonData;
    this.specialPokemonData = specialPokemonData;
    this.score = 0;
    this.lifeScoreBonus = 500;
    this.masterballScoreBonus = 2000;
    this.heart = new Image();
    this.heart.src = "../assets/heart.png";
    this.masterball = new Image();
    this.masterball.src = "../assets/masterball.png";
    this.currentLevel = 0;
    this.background = new Image();
    this.background.src = levels[this.currentLevel].background;
    this.pokemonCount = 0;
    this.controls();
    this.spawnPokemon();
    this.spawnSpecialPokemon();
  }

  start() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
    this.player.draw(ctx);
    this.updatePokeballs();
    this.updatePokemon();
    this.checkCollision();
    this.checkPlayerCollision();
    this.displayScore();
    this.displayLives();
    this.displayLevel();
    this.displayCount();
    this.displayMasterball();
    this.lifeBonus();
    this.masterballBonus();
    this.levelUp();

    if (this.player.lives <= 0) {
      this.endGame();
    }
  }

  controls() {
    window.addEventListener("keydown", this.handleKeydown.bind(this));
  }

  handleKeydown(e) {
    const key = e.key;
    const possibleKeys = ["ArrowUp", "ArrowDown", " ", "m"];
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
          this.pokeballArr.push(pokeball);
          break;
        case "m":
          const used = this.player.useMasterball();
          if (used) {
            this.defeatAllPokemon();
          }
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
      const randomPokemon = this.getRandomPokemon();
      const pokemon = new Pokemon(
        canvas,
        randomPokemon.imageSrc,
        randomPokemon.score
      );
      pokemon.speed = levels[this.currentLevel].speed;
      this.pokemonArr.push(pokemon);
    }, levels[this.currentLevel].rate);
  }

  spawnSpecialPokemon() {
    setInterval(() => {
      const randomSpecialPokemon = this.getRandomPokemon(true);
      const specialPokemon = new Pokemon(
        canvas,
        randomSpecialPokemon.imageSrc,
        randomSpecialPokemon.score
      );
      this.pokemonArr.push(specialPokemon);
    }, 10000);
  }

  getRandomPokemon(special = false) {
    if (special) {
      const randomIndex = Math.floor(
        Math.random() * this.specialPokemonData.length
      );
      return this.specialPokemonData[randomIndex];
    }
    const randomIndex = Math.floor(Math.random() * this.pokemonData.length);
    return this.pokemonData[randomIndex];
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
          this.score += pokemon.score;
          this.pokemonCount += 1;
        }
      });
    });
  }

  checkPlayerCollision() {
    this.pokemonArr.forEach((pokemon, index) => {
      if (
        pokemon.x < this.player.x + this.player.width &&
        pokemon.x + pokemon.width > this.player.x &&
        pokemon.y < this.player.y + this.player.height &&
        pokemon.y + pokemon.height > this.player.y
      ) {
        this.player.opacity = 0.5;
        setTimeout(() => {
          this.player.opacity = 1;
        }, 300);
        this.player.loseLife();
        this.pokemonArr.splice(index, 1);
      }
    });
  }

  defeatAllPokemon() {
    this.pokemonArr.forEach((pokemon) => {
      pokemon.image.src = "../assets/capture.png";
      pokemon.speed = 0;
      setTimeout(() => {
        this.pokemonArr = [];
      }, 100);
      this.score += pokemon.score;
      this.pokemonCount += 1;
    });
    this.flashScreen();
  }

  flashScreen() {
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setTimeout(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.start();
    }, 500);
  }

  levelUp() {
    if (
      this.currentLevel < levels.length - 1 &&
      this.pokemonCount >= levels[this.currentLevel].maxCount
    ) {
      this.currentLevel++;
      this.pokemonCount = 0;
      this.pokemonArr = [];
      this.flashScreen();
      this.background.src = levels[this.currentLevel].background;
    }
  }

  lifeBonus() {
    if (this.score >= this.lifeScoreBonus) {
      this.player.gainLife();
      this.lifeScoreBonus += 1000;
    }
  }

  masterballBonus() {
    if (this.score >= this.masterballScoreBonus) {
      this.player.gainMasterball();
      this.masterballScoreBonus += 1500;
    }
  }

  // displayScore() {
  //   ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  //   ctx.fillRect(5, 6, 160, 32);
  //   ctx.font = "bold 25px Arial";
  //   ctx.fillStyle = "white";
  //   ctx.fillText(`Score: ${this.score}`, 10, 30);
  // }
  displayScore() {
    const text = `Score: ${this.score}`;
    const textWidth = ctx.measureText(text).width;
    const padding = 20;
    ctx.font = "bold 25px Arial";
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(5, 6, textWidth + padding, 32);
    ctx.fillStyle = "white";
    ctx.fillText(text, 10, 30);
  }

  displayLevel() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(685, 6, 110, 32);
    ctx.font = "bold 25px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`Level: ${levels[this.currentLevel].level}`, 695, 30);
  }

  displayLives() {
    const heartWidth = 20;
    const heartHeight = 20;
    for (let i = 0; i < this.player.lives; i++) {
      ctx.drawImage(
        this.heart,
        10 + i * (heartWidth + 5),
        40,
        heartWidth,
        heartHeight
      );
    }
  }

  displayMasterball() {
    const masterballWidth = 20;
    const masterballHeight = 20;
    for (let i = 0; i < this.player.masterballs; i++) {
      ctx.drawImage(
        this.masterball,
        10 + i * (masterballWidth + 5),
        65,
        masterballWidth,
        masterballHeight
      );
    }
  }

  // displayCount() {
  //   ctx.font = "bold 25px Arial";
  //   ctx.fillStyle = "white";
  //   ctx.fillText(
  //     `Catch: ${this.pokemonCount} / ${levels[this.currentLevel].maxCount}`,
  //     605,
  //     60
  //   );
  // }

  displayCount() {
    const text = `Catch: ${this.pokemonCount} / ${
      levels[this.currentLevel].maxCount
    }`;
    const textWidth = ctx.measureText(text).width;
    const pr = 20;
    const canvasWidth = ctx.canvas.width;
    const xPosition = canvasWidth - textWidth - pr;

    ctx.font = "bold 25px Arial";
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(xPosition - 10, 40, textWidth + 30, 35); // Adjust padding as needed
    ctx.fillStyle = "white";
    ctx.fillText(text, xPosition, 65);
  }

  endGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "50px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Game Over", canvas.width / 2 - 150, canvas.height / 2);
  }
}

window.onload = () => {
  const game = new Game();
  setInterval(() => {
    game.start();
  }, Math.round(1000 / 60));
};

// function gameLoop() {
//   game.start();
//   requestAnimationFrame(gameLoop);
// }

// gameLoop();

console.log("Game class loaded");
// });
