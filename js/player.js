// const canvas = document.getElementById("gameCanvas");
// const ctx = canvas.getContext("2d");

class Player {
  constructor(canvas) {
    this.width = 50;
    this.height = 50;
    this.x = canvas.width / 2 - this.width / 2;
    this.y = canvas.height - this.height - 10;
    this.speed = 5;
    this.image = new Image();
    this.image.src = "../assets/player.png";

    this.image.onload = () => {
      this.ready = true;
    };
  }

  draw(ctx) {
    if (this.ready) {
      return ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }
}

// window.Player = Player;

console.log("Player class loaded");
