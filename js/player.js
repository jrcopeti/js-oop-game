class Player {
  constructor(canvas) {
    this.width = 80;
    this.height = 80;
    this.x = 10;
    this.y = canvas.height / 2 - this.height / 2;
    this.speed = 40;
    this.image = document.createElement("img");
    this.image.src = "../assets/player2.png";
    this.throwImage = document.createElement("img");
    this.throwImage.src = "../assets/player-throwing.png";
    this.currentImage = this.image;
    this.opacity = 1;
    this.lives = 5;
    this.masterballs = 3;
  }

  draw(ctx) {
    ctx.globalAlpha = this.opacity;
    ctx.beginPath();
    ctx.ellipse(
      this.x + this.width / 2,
      this.y + this.height,
      this.width / 4,
      10,
      0,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fill();
    ctx.drawImage(this.currentImage, this.x, this.y, this.width, this.height);
  }

  move(direction) {
    const topBoundary = 100;
    const bottomBoundary = canvas.height - this.height - 20;
    const leftBoundary = 10;
    const rightBoundary = canvas.width - this.width - 30;
    if (direction === "up" && this.y > topBoundary) {
      this.y -= this.speed;
    } else if (direction === "down" && this.y < bottomBoundary) {
      this.y += this.speed;
    } else if (direction === "left" && this.x > leftBoundary) {
      this.x -= this.speed;
    } else if (direction === "right" && this.x < rightBoundary) {
      this.x += this.speed;
    }
  }

  throw() {
    this.currentImage = this.throwImage;
    const pokeball = new Pokeball(
      this.x + this.width,
      this.y + this.height / 2 - 10
    );
    setTimeout(() => {
      this.currentImage = this.image;
    }, 200);
    throwAudio.play();

    return pokeball;
  }

  useMasterball() {
    if (this.masterballs > 0) {
      this.currentImage = this.throwImage;
      useMasterballAudio.volume = sfxVol;
      useMasterballAudio.play();
      this.masterballs -= 1;
      setTimeout(() => {
        this.currentImage = this.image;
      }, 200);
      return true;
    }
    return false;
  }

  gainMasterball() {
    if (this.masterballs >= 10) return;

    this.masterballs += 1;
    gainMasterballAudio.play();
  }

  loseMasterball() {
    this.masterballs -= 1;
  }

  loseLife() {
    this.lives -= 1;
    hitAudio.play();
  }

  gainLife() {
    if (this.lives >= 20) return;
    this.lives += 1;
    heartAudio.play();
  }

  hit() {
    this.opacity = 0.5;
    setTimeout(() => {
      this.opacity = 1;
    }, 300);
  }
}

console.log("Player class loaded");
