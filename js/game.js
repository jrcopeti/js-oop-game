class Game {
  constructor() {
    this.player = new Player(canvas);
    this.pokeballArr = [];
    this.pokemonArr = [];
    this.pokemonData = pokemonData;
    this.specialPokemonData = specialPokemonData;
    this.score = 0;
    this.lifeScoreBonus = 1000;
    this.masterballScoreBonus = 750;
    this.heart = new Image();
    this.heart.src = "../assets/heart.png";
    this.masterball = new Image();
    this.masterball.src = "../assets/masterball.png";
    this.currentLevel = 0;
    this.background = new Image();
    this.background.src = levels[this.currentLevel].background;
    this.pokemonCount = 0;
    this.interval = null;
    this.specialInterval = null;
    this.pause = false;
    this.gameOver = false;
    this.controls();
    this.showPokemon();
    this.showSpecialPokemon();
  }

  start() {
    if (this.pause) {
      return;
    }

    if (this.player.lives <= 0) {
      gameOverAudio.play();
      this.endGame();
    }

    if (this.gameOver) {
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    startScreen.style.display = "none";
    interScreen.style.display = "none";
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
  }

  controls() {
    window.addEventListener("keydown", this.handleKeydown.bind(this));
  }

  handleKeydown(e) {
    const key = e.key;
    const possibleKeys = ["ArrowUp", "ArrowDown", " ", "m", "Enter"];
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
          break;
        case "Enter":
          this.pause = !this.pause;
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

  showPokemon() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => {
      const randomPokemon = this.getRandomPokemon();
      const pokemon = new Pokemon(
        canvas,
        randomPokemon.imageSrc,
        randomPokemon.score,
        randomPokemon.name
      );
      pokemon.speed = levels[this.currentLevel].speed;
      this.pokemonArr.push(pokemon);
    }, levels[this.currentLevel].rate);
  }

  showSpecialPokemon() {
    if (this.specialInterval) {
      clearInterval(this.specialInterval);
    } else
      this.specialInterval = setInterval(() => {
        const randomSpecialPokemon = this.getRandomPokemon(true);
        const specialPokemon = new Pokemon(
          canvas,
          randomSpecialPokemon.imageSrc,
          randomSpecialPokemon.score,
          randomSpecialPokemon.name
        );
        specialPokemon.speed = levels[this.currentLevel].specialSpeed;
        this.pokemonArr.push(specialPokemon);
      }, levels[this.currentLevel].specialRate);
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
          console.log("Collision detected with", pokemon.name);
          pokemon.image.src = "../assets/capture.png";
          pokemon.speed = 0;
          this.pokeballArr.splice(pokeballIndex, 1);
          setTimeout(() => {
            this.pokemonArr.splice(pokemonIndex, 1);
          }, 100);

          switch (pokemon.name) {
            case "Weezing":
            case "Arbok":
              if (this.player.masterballs > 0) {
                this.player.loseMasterball();
              }
              this.score -= pokemon.score;
              this.flashScreen();
              break;
            case "Ekans":
            case "Koffing":
            case "Kadabra":
              this.score -= pokemon.score;
              this.flashScreen();
              break;
            case "Gengar":
            case "Gastly":
              this.score -= pokemon.score;
              this.player.loseLife();
              this.player.hit();
              break;
            case "Mewtwo":
            case "Lugia":
            case "Charizard":
              this.player.gainMasterball();
              this.score += pokemon.score;
              gainMasterballAudio.play();
              break;
            case "Mew":
            case "Ho-oh":
            case "Venosaur":
              this.player.gainLife();
              this.score += pokemon.score;
              heartAudio.play();
              break;
            case "Jynx":
            case "Blastoise":
              this.defeatAllPokemon();
              this.score += pokemon.score;
            default:
              this.score += pokemon.score;
              break;
          }
          captureAudio.play();
          this.pokemonCount += 1;
          console.log("Pokemon count after increment:", this.pokemonCount); // Debugging
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
        this.player.hit();
        this.player.loseLife();
        this.pokemonArr.splice(index, 1);
      }
    });
  }

  defeatAllPokemon() {
    useMasterballAudio.play();
    this.pokemonArr.forEach((pokemon, index) => {
      console.log("Defeating all Pokemon", pokemon.name);
      pokemon.image.src = "../assets/capture.png";
      pokemon.speed = 0;
      this.flashScreen();
      this.pokemonCount += 1;
      this.score += pokemon.score;
      setTimeout(() => {
        this.pokemonArr.splice(index, 1);
        // this.pokemonArr = [];
      }, 100);
      console.log("Pokemon count after increment:", this.pokemonCount);
    });
  }

  flashScreen() {
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setTimeout(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.start();
    }, 800);
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
      levelUpAudio.play();
      this.background.src = levels[this.currentLevel].background;
      this.showPokemon();
      this.showSpecialPokemon();
    } else if (
      this.currentLevel === levels.length - 1 &&
      this.pokemonCount >= levels[this.currentLevel].maxCount
    ) {
      this.flashScreen();
      this.finalGame();
    }
  }

  lifeBonus() {
    if (this.score >= this.lifeScoreBonus) {
      this.player.gainLife();
      this.lifeScoreBonus += 1000;
      heartAudio.play();
    }
  }

  masterballBonus() {
    if (this.score >= this.masterballScoreBonus) {
      this.player.gainMasterball();
      this.masterballScoreBonus += 750;
      gainMasterballAudio.play();
    }
  }

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
    ctx.fillRect(xPosition - 10, 40, textWidth + 30, 35);
    ctx.fillStyle = "white";
    ctx.fillText(text, xPosition, 65);
  }

  endGame() {
    this.gameOver = true;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    clearInterval(this.interval);
    clearInterval(this.specialInterval);
    canvas.style.display = "none";
    endScreen.style.display = "block";
    scoreDisplay.innerText = `Your Score: ${this.score}`;
    console.log("endGame called");
  }

  finalGame() {
    this.gameOver = true;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    clearInterval(this.interval);
    clearInterval(this.specialInterval);
    canvas.style.display = "none";
    finalScreen.style.display = "block";
    finalScoreDisplay.innerText = `Your Score: ${this.score}`;
    console.log("finalGame called");
  }
}

console.log("Game class loaded");
