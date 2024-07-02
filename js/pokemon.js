class Pokemon {
  constructor(canvas, imgSrc, score) {
    this.width = 70;
    this.height = 70;
    this.x = canvas.width;
    this.y = Math.floor(Math.random() * (canvas.height - this.height));
    this.speed = 5;
    this.score = score;
    this.image = new Image();
    this.image.src = imgSrc;
    this.image.onload = () => {
      this.ready = true;
    };
  }

  draw(ctx) {
    if (this.ready) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }

  move() {
    this.x -= this.speed;
  }
}
