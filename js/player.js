// const canvas = document.getElementById("gameCanvas");
// const ctx = canvas.getContext("2d");

class Player {
  constructor(canvas) {
    this.width = 70;
    this.height = 70;
    this.x = 10;
    this.y = canvas.height / 2 - this.height / 2;
    this.speed = 5;
    this.image = new Image();
    this.image.src = "../assets/player2.png";
    this.throwImage = new Image();
    this.throwImage.src = "../assets/player-throwing.png";
    this.currentImage = this.image;

    this.image.onload = () => {
      this.ready = true;
    };
    this.throwImage.onload = () => {
      this.throwReady = true;
    };
  }

  draw(ctx) {
    if (this.ready && this.throwReady) {
      return ctx.drawImage(this.currentImage, this.x, this.y, this.width, this.height);
    }
  }
}

// window.Player = Player;

console.log("Player class loaded");
