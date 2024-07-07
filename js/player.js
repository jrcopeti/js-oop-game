class Player {
  constructor(canvas) {
    this.width = 70;
    this.height = 70;
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
    const topBoundary = 85;
    if (direction === "up" && this.y > topBoundary) {
      this.y -= this.speed;
    } else if (direction === "down" && this.y + this.height < canvas.height) {
      this.y += this.speed;
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
      this.masterballs -= 1;
      setTimeout(() => {
        this.currentImage = this.image;
      }, 200);
      return true;
    }
    return false;
  }

  gainMasterball() {
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
